import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  changeLabelFloat(input: HTMLInputElement){
    const hasValue = input.value
  
    if(hasValue){
      input.classList.add('active')
    }else {
      input.classList.remove('active')
    }

  }

  onChange(event: Event){
    const input: HTMLInputElement = event?.target as HTMLInputElement
    console.log(input.value)
    this.changeLabelFloat(input)
  }

}
