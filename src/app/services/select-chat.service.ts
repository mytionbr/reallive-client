import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectChatService {

  private selectedChat = new Subject<any>();

  sendUpdate(value: String){
    this.selectedChat.next(value);
  }

  getUpdate(){
    return this.selectedChat.asObservable();
  }

  constructor() { }
}
