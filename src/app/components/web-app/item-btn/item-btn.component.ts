import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item-btn',
  templateUrl: './item-btn.component.html',
  styleUrls: ['./item-btn.component.scss']
})
export class ItemBtnComponent implements OnInit {

  @Input() icon!: string;
  @Input() ariaLabel: string  = "";
  @Input() iconColor: "white" | "dark" =  "dark"
  @Output() clickEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {
  }

  onClick(){
    this.clickEvent.emit(true);
  }

}
