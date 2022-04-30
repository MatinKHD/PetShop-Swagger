import {Component, OnInit} from '@angular/core';
import {PetService} from "../../services/pet.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-pet-detail',
  templateUrl: './pet-detail.component.html',
  styleUrls: ['./pet-detail.component.css']
})
export class PetDetailComponent implements OnInit {
  id!: any;
  pet: any = {};
  loading = false;

  constructor(
    private petService: PetService,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (this.id) {
        this.getById();
      } else {
        console.error('can not find id');
      }
    });
  }

  ngOnInit(): void {
  }

  getById() {
    this.loading = true;
    this.petService.findById(this.id).subscribe((value: any) => {
      this.pet = value;
    }).add(() => {
      this.loading = false;
    })
  }
}
