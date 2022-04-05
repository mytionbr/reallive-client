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


@NgModule({
  declarations: [
    WebAppComponent,
    SidebarComponent,
    HeaderComponent,
    SidebarHeaderComponent,
    ImgBoxComponent,
    ItemBtnComponent,
    SearchBoxComponent
    
  ],
  imports: [
    CommonModule,
    WebAppRoutingModule
  ]
})
export class WebAppModule { }
