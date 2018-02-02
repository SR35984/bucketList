import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { List } from './list';
import { User } from '../user/user';

@Injectable()
export class ListService {
  currentList: List;
  lists: List[];
  users: User[];

  constructor(
    private _http: Http
  ) { }

  createList(list: List, callback, errorback) {
    this._http.post('/dashboard', list).subscribe(
      (res) => {
        const list = res.json();
        this.currentList = list;
        callback(this.currentList);
      },
      (err) => {
        errorback(err.json());
      }
    )
  }

  retrieveUsers(callback, errorback) {
    this._http.get('/users').subscribe(
      (res) => {
        const users = res.json();
        this.users = users;
        callback(users);
      },
       (err) => {
         errorback(err.json());
       }
      )
   }
   
  retrieveLists(callback, errorback) {
    this._http.get('/dashboard').subscribe(
      (res) => {
        const lists = res.json();
        this.lists = lists;
        callback(lists);
      },
       (err) => {
         errorback(err.json());
       }
      )
   }
}
