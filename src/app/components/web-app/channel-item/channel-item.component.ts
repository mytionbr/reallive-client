import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { SelectChatService } from 'src/app/services/select-chat.service';
import { Channel } from '../../../models/channel';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})

export class ChannelItemComponent implements OnInit {
  @Input() channel?: Channel;
  updatedAt?: string | null;
  isGroup = false

  constructor(private selectChatService: SelectChatService,private datePipe: DatePipe) {  
  }

  ngOnInit(): void {
    this.isGroup = this.channel?.type == "group"
    this.updatedAt = this.datePipe.transform(this.channel?.lastMessages?.lastMessage?.updatedAt, 'dd/MM/yyyy')
  }

  onClick() {
    const id = this.channel?.id;
    if(id) this.selectChatService.sendUpdate(id);
  }

}
