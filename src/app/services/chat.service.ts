import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import {
  CREATE_CHAT_ROOM,
} from '../graphql/mutations/chatRoom';
import { FIND_CHAT_ROOMS, FIND_CHAT_ROOM_WITH_MESSAGES } from '../graphql/queries/chatRoom';
import { CHANNELS } from '../mocks/channels';
import { Channel } from '../models/channel';
import { CreateChatInput, ChatType, CreateChatOutput } from '../models/chat';
import { AuthService } from './auth.service';
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
    private selectChatService: SelectChatService,
    private authService: AuthService  ) {}

  getChannels() {
    const token = this.tokenService.getToken();
    if (token) {
      const userId = token?.userId;
      const queryResult = this.apollo.query({
        query: FIND_CHAT_ROOMS,
        variables: { userId },
      });

      return queryResult;
     // return CHANNELS;
    }
    throw new Error('Usuário não logado');
  }

  createSingleChat(directUserId: string) {
    const currentUserId = this.authService.getUserId()

    if (!currentUserId) throw new Error('Usuário não autenticado');

    const usersId = [currentUserId, directUserId];
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
      this.selectChatService.sendUpdate(createdChat.id);
    });
  }

  getChatById(chatRoomId: string) {
    const currentUserId = this.authService.getUserId()
    const result = this.apollo.query({
      query: FIND_CHAT_ROOM_WITH_MESSAGES,
      variables: {chatRoomId, currentUserId},
    });
     console.log(result)
     return result;
  }
}
