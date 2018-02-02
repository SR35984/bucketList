import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { UserService } from './user/user.service';
import { UserComponent } from './user/user.component';
import { UserNewComponent } from './user/user-new/user-new.component';
import { UserLogoutComponent } from './user/user-logout/user-logout.component';
import { UserShowComponent } from './user/user-show/user-show.component';

import { ListService } from './list/list.service';
import { ListComponent } from './list/list.component';
import { ListNewComponent } from './list/list-new/list-new.component';
import { ListShowComponent } from './list/list-show/list-show.component';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserNewComponent,
    UserLogoutComponent,
    UserShowComponent,
    ListComponent,
    ListNewComponent,
    ListShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [UserService, ListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
