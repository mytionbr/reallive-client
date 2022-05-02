import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-box',
  templateUrl: './loading-box.component.html',
  styleUrls: ['./loading-box.component.scss']
})
export class LoadingBoxComponent implements OnInit {

  @Input()
  size: 'sm' | 'md' | 'lg' = 'sm'
 
  constructor() { }

  ngOnInit(): void {
  }

}
