import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  private refresh = new Subject<any>();

  constructor() { }

  sendUpdate(isLoading: boolean){
    this.refresh.next({isLoading})
  }

  getUpdate(){
    return this.refresh.asObservable()
  }

}
