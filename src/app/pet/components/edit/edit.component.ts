import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PetService} from "../../services/pet.service";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  // @ts-ignore
  updateForm: FormGroup;
  id!: string;
  loading = false;
  pet: any = {};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private petService: PetService
  ) {
    this.route.params.subscribe((params: any) => {
      this.id = params['id'];
      if (this.id) {
        this.getById();
      } else {
        console.error("can not find id");
      }
    })
  }

  getById() {
    this.loading = true;
    this.petService.findById(this.id).subscribe((value: any) => {
      this.pet = value;
      this.updateForm.controls['name'].setValue(this.pet.name);
      this.updateForm.controls['id'].setValue(this.pet.id);
      this.updateForm.controls['status'].setValue(this.pet.status);
      this.updateForm.controls['category'].setValue(this.pet.category.name);
    }).add(() => {
      this.loading = false;
    })
  }

  ngOnInit() {
    this.updateForm = new FormGroup({
      name: new FormControl('', []),
      id: new FormControl('', []),
      status: new FormControl('', []),
      category: new FormControl('', []),
    })
  }

  putPet(){
    let body = {
      id: this.updateForm.controls['id'].value,
      category: {
        id: 0,
        name: this.updateForm.controls['category'].value
      },
        name: this.updateForm.controls['name'].value,
        photoUrls: [
          "string"
        ],
        tags: [
          {
            "id": 0,
            "name": "string"
          }
        ],
        status: this.updateForm.controls['status'].value,
    }
    this.petService.putPet(body).subscribe(((value:any) => {
      console.log(value);
      this.router.navigate(['/pet/table']);
    }))
  }
}
