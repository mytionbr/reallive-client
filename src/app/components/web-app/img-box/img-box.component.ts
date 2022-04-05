import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.scss']
})
export class ImgBoxComponent implements OnInit {

  @Input() src = ""
  @Input() alt = ""

  constructor() { }

  ngOnInit(): void {
  }

}
