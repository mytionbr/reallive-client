import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { MessageService } from 'src/app/services/message.service';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.scss']
})
export class ChatMessagesComponent implements OnInit {

  @Input()
  messages?: any[] = [];

  currentUserId?: string;

  constructor(private messageService: MessageService, private authService: AuthService) { }

  ngOnInit(): void {
    this.currentUserId = this.authService.getUserId();
  }

}
