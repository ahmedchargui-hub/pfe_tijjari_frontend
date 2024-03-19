import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { UserComponent } from './administrateur/user/user.component';
import { RoleComponent } from './administrateur/role/role.component';
import { DeveloperComponent } from './developer/developer.component';
import { Calendar } from 'fullcalendar';
import { CalendarorgComponent } from './organizer/calendarorg/calendarorg.component';
import { AdmincalendarComponent } from './administrateur/admincalendar/admincalendar.component';
import { OrganizerComponent } from './organizer/organizer.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "administrateur", component: AdministrateurComponent },
  { path: "user", component: UserComponent },
  { path: "admincalendar", component: AdmincalendarComponent },

  { path: "role", component: RoleComponent },
  { path: "developer", component: DeveloperComponent },
  { path: "organizer", component: OrganizerComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
