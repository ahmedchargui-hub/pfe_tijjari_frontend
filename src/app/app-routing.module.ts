import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { UserComponent } from './administrateur/user/user.component';
import { RoleComponent } from './administrateur/role/role.component';
import { DeveloperComponent } from './developer/developer.component';
import { OrganizerComponent } from './organizer/organizer.component';
import { HomeComponent } from './administrateur/home/home.component';
import { DashboardComponent } from './administrateur/dashboard/dashboard.component';
import { AdmincalendarComponent } from './administrateur/admincalendar/admincalendar.component';
import { CalendarorgComponent } from './organizer/calendarorg/calendarorg.component';
import { AddprojectComponent } from './organizer/addproject/addproject.component';
import { ProjectstatusComponent } from './organizer/projectstatus/projectstatus.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirect to login page on empty path
  { path: 'login', component: LoginComponent },
  {
    path: 'administrateur', component: AdministrateurComponent, children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirect to home page by default
      { path: 'user', component: UserComponent },
      { path: 'role', component: RoleComponent },
      { path: 'home', component: HomeComponent },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'admincalendar', component: AdmincalendarComponent }
    ]
  },
  { path: 'developer', component: DeveloperComponent },
  { 
    path: 'organizer', component: OrganizerComponent, children: [
      { path: '', redirectTo: 'calendarorg', pathMatch: 'full' }, // Redirect to calendarorg by default
      { path: 'calendarorg', component: CalendarorgComponent },
      { path: 'addproject', component: AddprojectComponent },
      { path: 'projectstatus', component: ProjectstatusComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
