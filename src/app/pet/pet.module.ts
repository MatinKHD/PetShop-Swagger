import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PetRoutingModule } from './pet-routing.module';
import { PetComponent } from './components/pet/pet.component';


@NgModule({
  declarations: [
    PetComponent
  ],
  imports: [
    CommonModule,
    PetRoutingModule
  ]
})
export class PetModule { }
