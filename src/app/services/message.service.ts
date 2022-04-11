import { Injectable } from '@angular/core';
import { MESSAGES } from '../mocks/messages';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  getMessages() {
    return MESSAGES;
  }
}
