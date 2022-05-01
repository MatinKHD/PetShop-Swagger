import {Component, OnInit} from '@angular/core';
import {PetService} from "../../services/pet.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  pets!: any;
  loading = false;
  settings = {
    actions: {
      edit: false,
      delete: false,
      custom: [
        {
          name: 'view',
          title: 'View'
        },
        {
          name: 'edit',
          title: 'Edit'
        }
      ],
    },
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Name'
      },
      status: {
        title: 'status',
      },
    }
  };

  constructor(private petService: PetService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAll()
  }

  getAll() {
    this.loading = true;
    this.petService.getAll(['sold']).subscribe(p => this.pets = p)
      .add(() => this.loading = false);
  }

  onCustom(event: any) {
    let id = event.data.id;
    if (event.action === 'view') {

      this.router.navigate([`pet/detail/${id}`]);
    } else if (event.action === 'edit') {
      this.router.navigate([`pet/edit/${id}`]);
    }
  }
}
