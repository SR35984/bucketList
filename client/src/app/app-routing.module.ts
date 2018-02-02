import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserShowComponent } from './user/user-show/user-show.component';

import { ListComponent } from './list/list.component';
import { ListNewComponent } from './list/list-new/list-new.component';
import { ListShowComponent } from './list/list-show/list-show.component';

const routes: Routes = [
    { path: 'user', component: UserComponent, children: [
        { path: 'new', component: UserNewComponent }
    ]},
    {path: 'dashboard', component: ListComponent },
    { path: 'dashboard', component: ListShowComponent },
    { path: 'user/:id', component: UserShowComponent },

    { path: '', pathMatch: 'full', component: UserComponent, children: [
        { path: '', component: UserNewComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
