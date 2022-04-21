import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { FindAllAccountComponent } from './components/find-all-account/find-all-account.component';
import { FindOneAccountComponent } from './components/find-one-account/find-one-account.component';
import { StoreAccountComponent } from './components/store-account/store-account.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';


@NgModule({
  declarations: [
    DeleteAccountComponent,
    FindAllAccountComponent,
    FindOneAccountComponent,
    StoreAccountComponent,
    UpdateAccountComponent,
    HeaderComponent,
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
