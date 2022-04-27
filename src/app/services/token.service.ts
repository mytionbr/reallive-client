import { Injectable } from '@angular/core';
import { UserInfo } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  readonly tokenStorage = 'reallive-use'

  constructor() { }

  storeToken(userInfo: UserInfo){
    const userInfoString = JSON.stringify(userInfo)
    localStorage.setItem(this.tokenStorage, userInfoString);
  }

  getToken(): undefined | UserInfo{
     const userInfoStored = localStorage.getItem(this.tokenStorage);
     if(!userInfoStored){
       return
     }
     const userInfoParsed = JSON.parse(userInfoStored);
     return userInfoParsed;
  }
}
