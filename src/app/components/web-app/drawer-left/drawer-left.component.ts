import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActiveDrawerLeftService } from 'src/app/services/active-drawer-left.service';

@Component({
  selector: 'app-drawer-left',
  templateUrl: './drawer-left.component.html',
  styleUrls: ['./drawer-left.component.scss']
})
export class DrawerLeftComponent implements OnInit {

  isActive: boolean = false;
  title: string = ""
  private updateActiveSubcription: Subscription
  

  constructor(private activeDrawerLeftService: ActiveDrawerLeftService) {
    this.updateActiveSubcription = this.activeDrawerLeftService.getUpdate().subscribe(
      result => {
        this.isActive = result.isActive;
        this.title = result.title
      }
    )
   }

  ngOnInit(): void {
  }

  goBack(activate: boolean): void{
    if(activate) this.isActive = false;
  }

  ngOnDestroy(): void {
    this.updateActiveSubcription.unsubscribe()
}

}
