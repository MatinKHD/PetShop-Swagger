import { Component, OnInit } from '@angular/core';
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  petCatalog! : any;
  constructor(private service : PetService) { }

  ngOnInit(): void {
    this.service.getAll().subscribe(p => this.petCatalog = p)
  }

}
