import { Component, Input, OnInit } from '@angular/core';
import { Channel } from '../../../models/channel';

@Component({
  selector: 'app-channel-item',
  templateUrl: './channel-item.component.html',
  styleUrls: ['./channel-item.component.scss']
})

export class ChannelItemComponent implements OnInit {
  @Input() channel: Channel | undefined = undefined;

  isGroup = false


  constructor() { 
   
  }

  ngOnInit(): void {
    this.isGroup = this.channel?.type == "group"
  }

}
