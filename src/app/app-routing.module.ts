import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

{ path: 'dashboard', component: DashboardComponent },

{ path: 'department', loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule) },]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
