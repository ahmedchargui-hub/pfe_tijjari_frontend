import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendarModule here

import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon'; // Import MatIconModule
import { MatDividerModule } from '@angular/material/divider'; // Import MatDividerModule
import { MatListModule } from '@angular/material/list'; // Import MatListModule

import { MatSidenavModule } from '@angular/material/sidenav';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './administrateur/user/user.component';
import { RoleComponent } from './administrateur/role/role.component';
import { DeveloperComponent } from './developer/developer.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { CalendarorgComponent } from './organizer/calendarorg/calendarorg.component';
import { EventModalComponent } from './organizer/event-modal/event-modal.component';
import { AdmincalendarComponent } from './administrateur/admincalendar/admincalendar.component';
import { HeaderComponent } from './administrateur/header/header.component';
import { SidenavComponent } from './administrateur/sidenav/sidenav.component';
import { HomeComponent } from './administrateur/home/home.component';
import { DashboardComponent } from './administrateur/dashboard/dashboard.component';
import { SidenavorgComponent } from './organizer/sidenavorg/sidenavorg.component';
import { HeaderorgComponent } from './organizer/headerorg/headerorg.component';
import { AddprojectComponent } from './organizer/addproject/addproject.component';
import { ProjectstatusComponent } from './organizer/projectstatus/projectstatus.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdministrateurComponent,
    UserComponent,
    RoleComponent,
    DeveloperComponent,
    OrganizerComponent,
    CalendarorgComponent,
    EventModalComponent,
    AdmincalendarComponent,
    HeaderComponent,
    SidenavComponent,
    HomeComponent,
    DashboardComponent,
    SidenavorgComponent,
    HeaderorgComponent,
    AddprojectComponent,
    ProjectstatusComponent,
  ],
  imports: [
    MatInputModule,
    MatInputModule,
    FormsModule,
    BrowserModule,
    FormsModule,
    FullCalendarModule, // Add FullCalendarModule here
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatSidenavModule, // Import MatSidenavModule
    MatIconModule,    // Import MatIconModule
    MatListModule,     // Import MatListModule
    MatMenuModule,    // Import MatMenuModule
    MatDividerModule  // Import MatDividerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
