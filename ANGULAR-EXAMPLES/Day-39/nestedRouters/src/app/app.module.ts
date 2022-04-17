import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PRegisterSuccessComponent } from './p-register-success/p-register-success.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileStoreComponent } from './profile-store/profile-store.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileLoginComponent } from './profile-login/profile-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PRegisterSuccessComponent,
    ProfileDeleteComponent,
    ProfileListComponent,
    ProfileStoreComponent,
    ProfileUpdateComponent,
    ProfileLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
