import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdministrateurComponent } from './administrateur/administrateur.component';
import { UserComponent } from './administrateur/user/user.component';
import { RoleComponent } from './administrateur/role/role.component';
import { DeveloperComponent } from './developer/developer.component';

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "administrateur", component: AdministrateurComponent },
  { path: "user", component: UserComponent },
  { path: "role", component: RoleComponent },
  { path: "developer", component: DeveloperComponent },

  { path: "", redirectTo: "/login", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
