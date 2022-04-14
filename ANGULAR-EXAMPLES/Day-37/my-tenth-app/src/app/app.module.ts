import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserStoreComponent } from './user-store/user-store.component';
import { UserDeleteComponent } from './user-delete/user-delete.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileStoreComponent } from './profile-store/profile-store.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';

@NgModule({
  declarations: [
    AppComponent,
    UserlistComponent,
    UserStoreComponent,
    UserDeleteComponent,
    ProfileListComponent,
    ProfileStoreComponent,
    ProfileDeleteComponent,
    ProfileUpdateComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
