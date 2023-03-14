import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [ { path: '', redirectTo: 'dadhboard', pathMatch: 'full' },

{ path: 'dashboard', component: DashboardComponent },
<<<<<<< HEAD

{ path: 'student', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },

{ path: 'students', loadChildren: () => import('./students/students.module').then(m => m.StudentsModule) },];
=======
{}];
>>>>>>> a8ddf1e316b98513f7da710ad30bd7ed84052c34

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
