import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SignupComponent} from "./components/signup/signup.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path:'user/signup', component: SignupComponent},
    {path:'user/login', component: LoginComponent},

  ])],
  exports: [RouterModule]
})
export class UserRoutingModule { }
