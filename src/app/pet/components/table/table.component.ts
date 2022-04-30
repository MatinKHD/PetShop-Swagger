import { Component, OnInit } from '@angular/core';
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pets! : any;
  constructor(private petService: PetService) { }

  ngOnInit(): void {
    setTimeout(() => {this.petService.getAll(['available']).subscribe(p => this.pets = p)},1000)
  }
  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      category: {
        title: 'Category'
      },

    }
  };
}
