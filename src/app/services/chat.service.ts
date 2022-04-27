import { Injectable } from '@angular/core';
import { CHANNELS } from '../mocks/channels';
import { Channel } from '../models/channel';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  getChannels(){
    return CHANNELS;
  }

  createChat(userId: string){
    
  }

  getChatById(id: string){
    return CHANNELS.find(chat => chat.id === id)
  }

  constructor() { 
  }
}
