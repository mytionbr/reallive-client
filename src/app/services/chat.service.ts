import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  CREATE_CHAT_ROOM,
} from '../graphql/mutations/chatRoom';
import { FIND_CHAT_ROOMS } from '../graphql/queries/chatRoom';
import { CHANNELS } from '../mocks/channels';
import { Channel } from '../models/channel';
import { CreateChatInput, ChatType, CreateChatOutput } from '../models/chat';
import { LoadingService } from './loading.service';
import { SelectChatService } from './select-chat.service';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  constructor(
    private tokenService: TokenService,
    private apollo: Apollo,
    private loadingService: LoadingService,
    private selectChatService: SelectChatService
  ) {}

  getChannels() {
    const token = this.tokenService.getToken();
    if (token) {
      const userId = token?.userId;
      const queryResult = this.apollo.query({
        query: FIND_CHAT_ROOMS,
        variables: { userId },
      });

      return queryResult;
      queryResult.subscribe({
        next: (result) => {
          const data = result.data as any;
          const chatRooms = data.findAllChatRoomsByUserId
          console.log(chatRooms);
        
        },
        error: (err) => console.log(err.message),
      });

     // return CHANNELS;
    }
    throw new Error('Usuário não logado');
  }

  createSingleChat(directUserId: string) {
    const userInfo = this.tokenService.getToken();
    const myUserId = userInfo?.userId;

    if (!myUserId) throw new Error('Usuário não autenticado');

    const usersId = [myUserId, directUserId];
    const type = ChatType.SINGLE;

    const createChatInput: CreateChatInput = {
      usersId,
      type,
    };
    const result = this.apollo.mutate({
      mutation: CREATE_CHAT_ROOM,
      variables: createChatInput,
    });

    this.loadingService.sendUpdate(true);

    result.subscribe((result) => {
      const createdChat = result.data as CreateChatOutput;
      this.loadingService.sendUpdate(false);
      this.selectChatService.sendUpdate(createdChat.id);
    });
  }

  getChatById(id: string) {
    return CHANNELS.find((chat) => chat.id === id);
  }
}
