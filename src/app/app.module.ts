import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FullCalendarModule } from '@fullcalendar/angular'; // Import FullCalendarModule here

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { AppRoutingModule } from './app-routing.module';
import { UserComponent } from './administrateur/user/user.component';
import { RoleComponent } from './administrateur/role/role.component';
import { DeveloperComponent } from './developer/developer.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { CalendarorgComponent } from './organizer/calendarorg/calendarorg.component';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EventModalComponent } from './developer/event-modal/event-modal.component';

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
    EventModalComponent
   
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FullCalendarModule, // Add FullCalendarModule here
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }),
    RouterModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
