import { Component, OnInit } from '@angular/core';
import { ActiveDrawerLeftService } from 'src/app/services/active-drawer-left.service';

@Component({
  selector: 'app-sidebar-header',
  templateUrl: './sidebar-header.component.html',
  styleUrls: ['./sidebar-header.component.scss']
})
export class SidebarHeaderComponent implements OnInit {

  constructor(private activeDrawerLeftService: ActiveDrawerLeftService) { }

  ngOnInit(): void {
  }

  activeDrawerNewChat(activate: boolean): void {
    if(activate)
      this.activeDrawerLeftService.sendUpdate({isActive: true, title: 'Nova conversa'});
  }

}
