import { Component, Input, OnInit } from '@angular/core';
import { Message } from '../../../models/message';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.scss']
})
export class ChatMessageComponent implements OnInit {

  @Input() message: Message | undefined = undefined
  @Input() isMy: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
