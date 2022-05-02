import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../../services/chat.service';
import { CHANNELS } from '../../../mocks/channels';
import { Channel } from '../../../models/channel';
import { SIZES } from 'src/app/models/sizes';

@Component({
  selector: 'app-channel-list',
  templateUrl: './channel-list.component.html',
  styleUrls: ['./channel-list.component.scss'],
})
export class ChannelListComponent implements OnInit {
  channels: Channel[] = [];
  loading: boolean = false;
  isEmpty: boolean = false;

  constructor(private chatService: ChatService) {}

  ngOnInit(): void {
    this.loadChannels()
  }

  loadChannels() {
    this.loading = true;
    const channelsSubscription = this.chatService.getChannels();
    channelsSubscription.subscribe({
      next: (result) => {
        const data = result.data as any;
        this.channels = data.findAllChatRoomsByUserId;
        this.loading = false;
        console.log(result)
        if (this.channels.length < 1) {
          this.isEmpty = true;
        }
      },
      error: (err) => console.log(err.message),
    });
  }
}
