import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { RegisterSuccessComponent } from './register-success/register-success.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileStoreComponent } from './profile-store/profile-store.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import { PRegisterSuccessComponent } from './p-register-success/p-register-success.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

let route : Routes = [
  // {path: "", component : UserStoreComponent},
  // {path: "store", component : UserStoreComponent},
  // {path: "userList", component : UserListComponent},
  // {path: "delete", component : UserDeleteComponent},
  // {path : "success/:uid", component : RegisterSuccessComponent},

  {path: "", component : ProfileStoreComponent},
  {path: "store", component : ProfileStoreComponent},
  {path: "profileList", component : ProfileListComponent},
  {path: "delete", component : ProfileDeleteComponent},
  {path : "update", component : ProfileUpdateComponent},
  {path : "success/:n", component : PRegisterSuccessComponent}
  
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserStoreComponent,
    UserDeleteComponent,
    RegisterSuccessComponent,
    ProfileListComponent,
    ProfileStoreComponent,
    ProfileDeleteComponent,
    PRegisterSuccessComponent,
    ProfileUpdateComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule, RouterModule.forRoot(route)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
