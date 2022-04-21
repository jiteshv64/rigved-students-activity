import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { DeleteAccountComponent } from './components/delete-account/delete-account.component';
import { FindAllAccountComponent } from './components/find-all-account/find-all-account.component';
import { FindOneAccountComponent } from './components/find-one-account/find-one-account.component';
import { StoreAccountComponent } from './components/store-account/store-account.component';
import { UpdateAccountComponent } from './components/update-account/update-account.component';



const routes: Routes = [
  {path: '', component: AdminDashboardComponent,children: [
    {path: 'store', component: StoreAccountComponent},
    {path: 'findAll', component: FindAllAccountComponent},
    {path: 'findUser', component: FindOneAccountComponent},
    {path: 'delete', component: DeleteAccountComponent},
    {path: 'update', component: UpdateAccountComponent},
    {path: '', redirectTo: '/admin/store', pathMatch: 'full'},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }