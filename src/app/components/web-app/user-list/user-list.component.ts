import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/mocks/users';
import { ChatType } from 'src/app/models/chat';
import { UserItem } from 'src/app/models/user';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserItem[] = USERS;

  constructor(private chatService: ChatService) { }

  ngOnInit(): void {
  }

  createSingleNewChat(userId: string){
    if(userId)
      this.chatService.createSingleChat(userId)
  }

}
