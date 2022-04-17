import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileListComponent } from './profile-list/profile-list.component';
import { ProfileStoreComponent } from './profile-store/profile-store.component';
import { ProfileDeleteComponent } from './profile-delete/profile-delete.component';
import { PRegisterSuccessComponent } from './p-register-success/p-register-success.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ProfileLoginComponent } from './profile-login/profile-login.component';

const routes: Routes = [
  { path: '', component: ProfileLoginComponent },
  { path: 'login', component: ProfileLoginComponent },
  { path: 'store', component: ProfileStoreComponent },
  {path: 'success/:name', component: PRegisterSuccessComponent,
    children: [
      { path: '', component: ProfileListComponent },
      { path: 'profileList', component: ProfileListComponent },
      { path: 'delete', component: ProfileDeleteComponent },
      { path: 'update', component: ProfileUpdateComponent }
      
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
