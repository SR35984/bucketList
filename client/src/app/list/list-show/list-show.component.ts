import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';
import { Router } from '@angular/router';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';

@Component({
  selector: 'app-list-show',
  templateUrl: './list-show.component.html',
  styleUrls: ['./list-show.component.css']
})
export class ListShowComponent implements OnInit {
  lists: List[] = [];
  user: User = new  User();
  users: User[] = [];

  constructor(
    private _userService: UserService,
    private _listService: ListService,
    private _route: Router
  ) {
    this._listService.retrieveLists(
      (lists) => {
        this.lists = lists;
        console.log(lists);
      },
      (err) => {
        console.log(err);
      }
    );
    this._listService.retrieveUsers(
      (users) => {
        this.users = users;
        console.log(users);
      },
      (err) => {
        console.log(err);
      }
    );
   }

  ngOnInit() {
    this._userService.getCurrentUser(
      (user) => {
        console.log(this._userService.currentUser);
        if (!user) {
          this._route.navigateByUrl('/');
          return;
        }
        this.user = user;
      },
      console.log
    );
  }
}