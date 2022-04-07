import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { SelectChatService } from 'src/app/services/select-chat.service';
import { Chat } from '../../../models/chat';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  selectedChat: Subscription;
  chat: Chat | undefined = undefined; 
  
  constructor(private selectChatService: SelectChatService, private chatService: ChatService) { 
    this.selectedChat = this.selectChatService.getUpdate().subscribe(
      result => {
        this.chat = this.chatService.getChatById(result);
      }
    )
  }

  ngOnInit(): void {
  }

}
