import { Component, OnInit } from '@angular/core';
import { ListService } from '../list.service';
import { List } from '../list';
import { UserService } from '../../user/user.service';
import { User } from '../../user/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-new',
  templateUrl: './list-new.component.html',
  styleUrls: ['./list-new.component.css']
})
export class ListNewComponent implements OnInit {
  lists: List[];
  user: User;
  list: List;

  constructor(
    private _userService: UserService,
    private _route: Router,
    private _listService: ListService
  ) {
    this.user = this._userService.currentUser;

   }

  ngOnInit() {
    this.list = new List();
    // this._listService.retrieveLists(
    //   (lists) => {
    //     this.lists = lists;
    //     console.log(lists);
    //   },
    //   (err) => {
    //     console.log(err);
    //   }
    // );
  }

  onSubmit(){
    this._listService.createList(this.list,
      (list) => {
        console.log(list);
        this._route.navigateByUrl('/dashboard');
          },
      (err) => {
        console.log('errors', err);
      }
    )
  }
}