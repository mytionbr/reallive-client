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
    DefaultPageComponent
    
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule
  ]
})
export class WebAppModule { }
