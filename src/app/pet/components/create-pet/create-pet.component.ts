import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {PetService} from "../../services/pet.service";

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.css']
})
export class CreatePetComponent implements OnInit {
  createForm!: FormGroup;

  constructor(
    private service: PetService,
  ) {
  }

  ngOnInit(): void {
    this.createForm = new FormGroup({
      name: new FormControl(''),
      category: new FormControl(''),
      photoUrl: new FormControl(''),
      status: new FormControl(''),
    })
    console.log(this.createForm.controls['name'].value);
  }

  create() {
    const body: any = {
      name: this.createForm.controls['name'].value,
      photoUrl: this.createForm.controls['photoUrl'].value,
      status: this.createForm.controls['status'].value
    }
    this.service.createPet(body).subscribe({
      next: (res: any) => {
        body.id = res.id;
      }
    })
  }
}
