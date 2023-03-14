import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import {DashboardModule} from './dashboard/dashboard.module';
import {DashboardRoutingModule} from './dashboard/dashboard-routing.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SubjectAddComponent } from './subject/subject-add/subject-add.component';
import { SubjectEditComponent } from './subject/subject-edit/subject-edit.component';
import { SubjectListComponent } from './subject/subject-list/subject-list.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    SidenavComponent,
    DashboardComponent,
    SubjectAddComponent,
    SubjectListComponent,
    SubjectEditComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    DashboardModule,
    DashboardRoutingModule
    MatSlideToggleModule

      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
