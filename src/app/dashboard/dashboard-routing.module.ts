import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";

const routes: Routes = 
[
 {
  path: 'admin',
   component: AdminDashboardComponent
 },
 {
  path:'student',
  component:StudentDashboardComponent
 },
 {
  path:'teacher',
  component:TeacherDashboardComponent
 }

 
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }