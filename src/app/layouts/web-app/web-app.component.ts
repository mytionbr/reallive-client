import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { SelectChatService } from 'src/app/services/select-chat.service';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.scss']
})
export class WebAppComponent implements OnInit {

  currentChatId: String | undefined = undefined;
  selectedChat: Subscription; 
  

  constructor(private selectChat: SelectChatService, private chatService: ChatService) { 
    this.selectedChat = this.selectChat.getUpdate().subscribe(
      result => {
        this.currentChatId = result;
      }
    )
  }

  ngOnInit(): void {
    
  }

  ngOnDestroy(): void {
    this.selectedChat.unsubscribe();
  }
}
