import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../../user/user.service';
import { ListService } from '../../list/list.service';
import { List } from '../../list/list';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  user: User;
  id: string;
  lists: List[] = [];

  constructor(
    private _router: Router,
    private _userService: UserService,
    private _listService: ListService,
    private _route: ActivatedRoute
  ) {
    this._route.paramMap.subscribe( params => {
      this.id = params.get('id');
   })
   }

  ngOnInit() {
    this.user = new User();
    this._userService.retrieveUser(this.id, 
      (user) => {
        this.user = user;
      },
      (err) => {
        console.log(err);
      }
    );
    this._listService.retrieveLists(
      (lists) => {
        this.lists = lists;
        console.log(lists);
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
