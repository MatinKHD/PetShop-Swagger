import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetComponent} from "./components/pet/pet.component";
import {CreatePetComponent} from "./components/create-pet/create-pet.component";

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'pet', component: PetComponent},
    {path: 'pet/create-pet', component: CreatePetComponent}
  ])],
  exports: [RouterModule]
})
export class PetRoutingModule { }
