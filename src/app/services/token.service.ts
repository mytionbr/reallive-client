import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  tokenStorage = 'reallive-user-token'

  constructor() { }

  storeToken(token: string){
    localStorage.setItem(this.tokenStorage, token);
  }

  getToken(){
    return localStorage.getItem(this.tokenStorage);
  }
}
