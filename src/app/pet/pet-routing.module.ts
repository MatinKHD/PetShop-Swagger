import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PetComponent} from "./components/pet/pet.component";
import {CreatePetComponent} from "./components/create-pet/create-pet.component";
import {TableComponent} from "./components/table/table.component";
import {EditComponent} from "./components/edit/edit.component";
import {PetDetailComponent} from "./components/pet-detail/pet-detail.component";


const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'pet', component: PetComponent},
    {path: 'pet/create-pet', component: CreatePetComponent},
    {path: 'pet/table', component: TableComponent},
    {path: 'pet/edit/:id', component: EditComponent},
    {path: 'pet/detail/:id', component: PetDetailComponent},
  ])],
  exports: [RouterModule]
})
export class PetRoutingModule {
}
