import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebAppRoutingModule } from './web-app-routing.module';
import { SidebarComponent } from '../../components/web-app/sidebar/sidebar.component';
import { WebAppComponent } from './web-app.component';
import { HeaderComponent } from '../../components/web-app/header/header.component';
import { SidebarHeaderComponent } from '../../components/web-app/sidebar-header/sidebar-header.component';
import { ImgBoxComponent } from '../../components/web-app/img-box/img-box.component';
import { ItemBtnComponent } from '../../components/web-app/item-btn/item-btn.component';
import { SearchBoxComponent } from '../../components/web-app/search-box/search-box.component';
import { ChannelListComponent } from '../../components/web-app/channel-list/channel-list.component';
import { ChannelItemComponent } from '../../components/web-app/channel-item/channel-item.component';
import { DefaultPageComponent } from 'src/app/components/web-app/default-page/default-page.component';
import { ChatComponent } from '../../components/web-app/chat/chat.component';
import { ChatHeaderComponent } from '../../components/web-app/chat-header/chat-header.component';
import { ChatInputComponent } from '../../components/web-app/chat-input/chat-input.component';
import { ChatMessagesComponent } from '../../components/web-app/chat-messages/chat-messages.component';
import { ChatInputMessageComponent } from '../../components/web-app/chat-input-message/chat-input-message.component';
import { ChatMessageComponent } from '../../components/web-app/chat-message/chat-message.component';
import { DrawerLeftComponent } from '../../components/web-app/drawer-left/drawer-left.component';


@NgModule({
  declarations: [
    WebAppComponent,
    SidebarComponent,
    HeaderComponent,
    SidebarHeaderComponent,
    ImgBoxComponent,
    ItemBtnComponent,
    SearchBoxComponent,
    ChannelListComponent,
    ChannelItemComponent,
    DefaultPageComponent,
    ChatComponent,
    ChatHeaderComponent,
    ChatInputComponent,
    ChatMessagesComponent,
    ChatInputMessageComponent,
    ChatMessageComponent,
    DrawerLeftComponent
    
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule
  ]
})
export class WebAppModule { }
