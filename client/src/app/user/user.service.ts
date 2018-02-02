import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { User } from './user';
import { List } from '../list/list';

@Injectable()
export class UserService {
  currentUser: User;
  user: User;
  lists: List[];
  

  constructor(
    private _http: Http
  ) { }

  createUser(user: User, callback, errorback) {
    this._http.post('/users', user).subscribe(
      (res) => {
        const user = res.json();

        this.currentUser = user;

        callback(this.currentUser);
      },
      (err) => {
        errorback(err);
      }
    )
  }

  getCurrentUser(callback, errorback) {
    this._http.get('/sessions').subscribe(
      (res) => {
        const user = res.json();

        if (user) {
          this.currentUser = user;
        }
        callback(user);
      },
      (err) => {
        errorback(err);
      }
    );
  }

  retrieveUser(id, callback, errorback) {
    this._http.get('/users/'+id).subscribe(
      (res) => {
        const user = res.json();
        if (user) {
          this.user = user;
        }
        console.log(this.user);
        callback(this.user);
      },
        (err) => {
          errorback(err);
        }
      )
    }

    // userLists(callback, errorback) {
    //   this._http.get('/lists).subscribe(
    //     (res) => {
    //       const lists = res.json();
    //       if (lists) {
    //         this.lists = lists;
    //       }
    //       console.log(this.lists);
    //       callback(this.lists);
    //     },
    //      (err) => {
    //        errorback(err);
    //      }
    //     )
    //  }

  logout(callback, errorback) {
    this._http.delete('/sessions').subscribe(
      (res) => {
        this.currentUser = null;

        callback(res.json());
      },
      (err) => {
        errorback(err);
      }
    );
  }
}
