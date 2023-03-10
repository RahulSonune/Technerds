
import { MaterialModule } from './material/material.module';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
=======
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
>>>>>>> 57c1488f7f6ab3ff5e803ffd488e486c22e115f1


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
      ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
