import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetComponent} from "./components/pet/pet.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'pet', component: PetComponent}
  ])],
  exports: [RouterModule]
})
export class PetRoutingModule { }
