import { Injectable } from '@angular/core';
import { CHANNELS } from '../mocks/channels';
import { Channel } from '../models/channel';
import { CreateChatInput } from '../models/chat';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private tokenService: TokenService) { 
  }

  getChannels(){
    return CHANNELS;
  }

  createSingleChat(createChatInput: CreateChatInput){
    const { directUserId, type } = createChatInput;
    const myUserId = this.tokenService.getToken();
    
  }

  getChatById(id: string){
    return CHANNELS.find(chat => chat.id === id)
  }

  
}
