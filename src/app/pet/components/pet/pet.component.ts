import {Component, OnInit} from '@angular/core';
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  public petCatalog: any[] = [];
  FPetCatalog: any[] = [];
  Available: any;
  Pending: any;
  Sold: any;
  loading = false;

  constructor(private service: PetService) {
  }

  ngOnInit(): void {
    this.getAllAvailable();
  }

  getAllAvailable() {
    this.loading = true
    this.service.getAll(['available']).subscribe((p: any) => {
      this.petCatalog = p;
      this.FPetCatalog = p;
    }).add(() => {
      this.loading = false;
    })
  }

  getAllSold() {
    this.loading = true
    this.service.getAll(['sold']).subscribe((p: any) => {
      this.petCatalog = p;
      this.FPetCatalog = p;
    }).add(() => {
      this.loading = false;
    })
  }

  getAllPending() {
    this.loading = true
    this.service.getAll(['pending']).subscribe((p: any) => {
      this.petCatalog = p;
      this.FPetCatalog = p;
    }).add(() => {
      this.loading = false;
    })
  }

  search(value: any) {
    return this.FPetCatalog = !value ? this.FPetCatalog = this.petCatalog : this.petCatalog.filter((p: any) => {
      if (p.name === undefined) {
        return 0;
      } else {
        return p.name.toLowerCase().includes(value.toLowerCase())
      }
    });
  }

  available() {
    return this.Available === "available"
  }

  pending() {
    return this.Pending === "pending"
  }

  sold() {
    return this.Sold === "sold"
  }
}
