import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

type InputActiveDrawerLeft = {
  isActive: boolean;
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class ActiveDrawerLeftService {

  private refresh = new Subject<any>();

  constructor() { }

  sendUpdate(inputActiveDrawerLeft: InputActiveDrawerLeft){
    this.refresh.next(inputActiveDrawerLeft)
  }

  getUpdate(){
    return this.refresh.asObservable()
  }
}
