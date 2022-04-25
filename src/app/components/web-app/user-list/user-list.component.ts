import { Component, OnInit } from '@angular/core';
import { USERS } from 'src/app/mocks/users';
import { UserItem } from 'src/app/models/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: UserItem[] = USERS;

  constructor() { }

  ngOnInit(): void {
  }

}
