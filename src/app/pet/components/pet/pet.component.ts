import {Component, OnInit} from '@angular/core';
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petCatalog!: any;
  FPetCatalog!: any;
  constructor(private service: PetService) {
  }

  ngOnInit(): void {
    this.service.getAll().subscribe((p: any) => {
      this.petCatalog = p;
      console.log(p);


    })

  }

  search(value: any) {
    this.FPetCatalog =   !value ? this.FPetCatalog = this.petCatalog : this.petCatalog.filter((p: any) => p.name.toLowerCase().includes(value.toLowerCase()))
    console.log("Filter",this.FPetCatalog);
  }
}
