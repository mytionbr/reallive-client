import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthFormStyleService {

  constructor() { }

  changeLabelFloat(input: HTMLInputElement){
    const hasValue = input.value
  
    if(hasValue){
      input.classList.add('active')
    }else {
      input.classList.remove('active')
    }

  }

  handleInputChange(event: Event){
    const input: HTMLInputElement = event?.target as HTMLInputElement
    this.changeLabelFloat(input)
  }
}
