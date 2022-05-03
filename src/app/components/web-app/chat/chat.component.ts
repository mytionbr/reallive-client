import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import { Message } from 'src/app/models/message';
import { ChatService } from 'src/app/services/chat.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SelectChatService } from 'src/app/services/select-chat.service';
import { Chat } from '../../../models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnChanges {

  @Input() currentChatId?: string;
  chat?: any; 
  messages?: any[];
  
  constructor(private chatService: ChatService, private loadingService: LoadingService) {}
  
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
    this.loadingService.sendUpdate(true);
    this.chatService.getChatById(chatId)
      .subscribe({
        next: (result) => {
          const data = result.data as any
          const chatInfo = data.findChatRoomWithMessages
          this.chat = chatInfo;
          const { messages } = chatInfo;
          this.messages = messages;
          this.loadingService.sendUpdate(false);
        },
        error: (err) => console.log(err)
      });
  }

}
