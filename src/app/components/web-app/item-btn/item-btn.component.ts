import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-btn',
  templateUrl: './item-btn.component.html',
  styleUrls: ['./item-btn.component.scss']
})
export class ItemBtnComponent implements OnInit {

  @Input() icon = ""

  constructor() { }

  ngOnInit(): void {
  }

}
