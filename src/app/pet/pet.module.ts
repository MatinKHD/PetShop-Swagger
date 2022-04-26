import { NgModule } from '@angular/core';


import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './components/pet/pet.component';
import { CreatePetComponent } from './components/create-pet/create-pet.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PetService} from "./services/pet.service";
import {CommonModule} from "@angular/common";



@NgModule({
  declarations: [
    PetComponent,
    CreatePetComponent,
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    RouterModule,
    HttpClientModule,
  ],
  providers: [
    PetService
  ]
})
export class PetModule { }
