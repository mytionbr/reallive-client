import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { CHANNELS } from '../../../mocks/channels';
import { Channel } from '../../../models/channel';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  channels: Channel[] =  [];

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
    this.channels = this.chatService.getChannels();
  }


}
