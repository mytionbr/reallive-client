import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { SelectChatService } from 'src/app/services/select-chat.service';
import { Chat } from '../../../models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges {

  @Input() currentChatId: string | undefined;
  chat: Chat | undefined; 
  
  constructor(private chatService: ChatService) {}
  ngOnChanges(changes: SimpleChanges): void {
    const updatedChatId = changes['currentChatId'].currentValue
    this.updateChat(updatedChatId);
   
  }

  ngOnInit(): void {

    if(this.currentChatId){
     this.updateChat(this.currentChatId)
    }
   
  }

  updateChat(chatId: string): void {
    this.chat = this.chatService.getChatById(chatId);
  }

}
