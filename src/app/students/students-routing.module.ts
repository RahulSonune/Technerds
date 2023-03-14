import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentAddComponent } from './student-add/student-add.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentViewComponent } from './student-view/student-view.component';
import { StudentsComponent } from './students.component';

const routes: Routes = 
[
  { path: '', component: StudentsComponent },
  {
    path:'add',component:StudentAddComponent
  },
   {
    path:'edit',component:StudentEditComponent
   },
   {
    path:'list',component:StudentEditComponent
   },
   {
    path:'view',component:StudentViewComponent
   }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
