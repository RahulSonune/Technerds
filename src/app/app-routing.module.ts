import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ { path: '', redirectTo: 'dadhboard', pathMatch: 'full' },

{ path: 'dashboard', component: DashboardComponent },


{ path: 'student', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },

{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },];



@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
