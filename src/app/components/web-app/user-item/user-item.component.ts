import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss']
})
export class UserItemComponent implements OnInit {

  @Input() image!: string;
  @Input() name!: string;
  @Input() id!: string;

  constructor() { }

  ngOnInit(): void {
  }

}
