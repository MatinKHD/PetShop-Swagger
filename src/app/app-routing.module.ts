import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path:'', loadChildren: () => import('../app/user/user.module').then((m) => m.UserModule)},
    {path:'', loadChildren: () => import('../app/pet/pet.module').then((m) => m.PetModule)}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
