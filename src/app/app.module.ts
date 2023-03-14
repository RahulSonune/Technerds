
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { SubjectAddComponent } from './subject/subject-add/subject-add.component';
import { SubjectEditComponent } from './subject/subject-edit/subject-edit.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';
>>>>>>> a8ddf1e316b98513f7da710ad30bd7ed84052c34



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent,
<<<<<<< HEAD
=======
    SubjectAddComponent,
    SubjectListComponent,
    SubjectEditComponent
>>>>>>> a8ddf1e316b98513f7da710ad30bd7ed84052c34
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
<<<<<<< HEAD
    BrowserAnimationsModule 
=======
    BrowserAnimationsModule,
    MatSlideToggleModule
>>>>>>> a8ddf1e316b98513f7da710ad30bd7ed84052c34
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
