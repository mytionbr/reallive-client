import { Component, OnInit } from '@angular/core';
import { CHANNELS } from '../../../mocks/channels';
import { Channel } from '../../../models/channel';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss']
})
export class ChannelListComponent implements OnInit {

  channels: Channel[] =  CHANNELS;

  constructor() { }

  ngOnInit(): void {
  }

}
