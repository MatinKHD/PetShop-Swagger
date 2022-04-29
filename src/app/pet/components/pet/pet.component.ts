import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public petCatalog: any[] = [];
  FPetCatalog: any[] = [];
  constructor(private service: PetService) {
  }

  ngOnInit(): void {
   this.getAll();
  }

  getAll(){
    this.service.getAll(['available']).subscribe((p: any) => {
      this.petCatalog = p;
      this.FPetCatalog = p;
    })
  }

  search(value: any) {
    return  this.FPetCatalog = !value ? this.FPetCatalog = this.petCatalog : this.petCatalog.filter((p: any)  => {
      if(p.name === undefined){
        return 0;
      }
      else {
       return  p.name.toLowerCase().includes(value.toLowerCase())
      }
    });
  }
}
