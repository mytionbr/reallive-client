import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { LoadingService } from 'src/app/services/loading.service';
import { SelectChatService } from 'src/app/services/select-chat.service';

@Component({
  selector: 'app-web-app',
  templateUrl: './web-app.component.html',
  styleUrls: ['./web-app.component.scss']
})
export class WebAppComponent implements OnInit {

  currentChatId: string | undefined = undefined;
  selectedChatSubscription: Subscription = new Subscription(); 
  loadingSubscription: Subscription = new Subscription(); 
  isLoading: boolean = false;

  constructor(private selectChat: SelectChatService, private chatService: ChatService, private loadingService: LoadingService) { 
  }

  ngOnInit(): void {
    this.selectedChatSubscription = this.selectChat.getUpdate().subscribe(
      result => {
        this.currentChatId = result;
        this.isLoading = false;
      }
    )
    this.loadingSubscription = this.loadingService.getUpdate().subscribe(
      result => {
        this.isLoading = result.isLoading;
      }
    )
   
  }

  ngOnDestroy(): void {
    this.selectedChatSubscription.unsubscribe();
    this.loadingSubscription.unsubscribe();
  }
}
