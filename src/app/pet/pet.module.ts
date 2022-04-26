import { NgModule } from '@angular/core';


import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './components/pet/pet.component';
import { CreatePetComponent } from './components/create-pet/create-pet.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PetService} from "./services/pet.service";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";



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
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    PetService
  ]
})
export class PetModule { }
