import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectChatService {

  private selectedChat = new Subject<any>();

  sendUpdate(chatId: string){
    this.selectedChat.next(chatId);
  }

  getUpdate(){
    return this.selectedChat.asObservable();
  }

  constructor() { 
  }
}
