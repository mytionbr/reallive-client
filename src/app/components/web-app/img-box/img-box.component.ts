import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-box',
  templateUrl: './img-box.component.html',
  styleUrls: ['./img-box.component.scss']
})
export class ImgBoxComponent implements OnInit {

  @Input() src = ""
  @Input() alt = ""
  @Input() noImage: boolean = false;
  @Input() defaultTittle?: string = ''; 
  @Input() letter: string = ''
  constructor() { }

  ngOnInit(): void {
    this.showDefaultLetter();
    console.log(this.noImage)
    console.log(this.defaultTittle)
  }

  showDefaultLetter(){
    if(this.defaultTittle && this.noImage) 
      this.letter = this.defaultTittle.charAt(0).toLocaleLowerCase();
  }

}
