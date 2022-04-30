import { NgModule } from '@angular/core';


import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './components/pet/pet.component';
import { CreatePetComponent } from './components/create-pet/create-pet.component';
import {RouterModule} from "@angular/router";
import {HttpClientModule} from "@angular/common/http";
import {PetService} from "./services/pet.service";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TableComponent } from './components/table/table.component';
import {Ng2SmartTableModule} from "ng2-smart-table";



@NgModule({
  declarations: [
    PetComponent,
    CreatePetComponent,
    TableComponent,
  ],
  imports: [
    CommonModule,
    PetRoutingModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    Ng2SmartTableModule,
  ],
  providers: [
    PetService
  ]
})
export class PetModule { }
