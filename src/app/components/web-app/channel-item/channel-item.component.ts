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
  @Input() channel: Channel | undefined = undefined;

  isGroup = false

  constructor(private selectChatService: SelectChatService) {  
  }

  ngOnInit(): void {
    this.isGroup = this.channel?.type == "group"
  }

  onClick() {
    const id = this.channel?.id;
    if(id) this.selectChatService.sendUpdate(id);
  }

}
