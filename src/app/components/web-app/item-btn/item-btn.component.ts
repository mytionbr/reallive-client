import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-btn',
  templateUrl: './item-btn.component.html',
  styleUrls: ['./item-btn.component.scss']
})
export class ItemBtnComponent implements OnInit {

  @Input() icon!: string;
  @Input() ariaLabel: string  = "";
  @Input() callbackFn?: () => void;

  constructor() {}

  ngOnInit(): void {
  }

  onClick(){
    if(this.callbackFn) this.callbackFn()
  }

}
