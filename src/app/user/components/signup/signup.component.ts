import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  createUserForm!: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.createUserForm = new FormGroup({
      id: new FormControl(''),
      username: new FormControl(''),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phone: new FormControl(''),
      userStatus: new FormControl(''),

    })
  }

  createUser() {
    const body = {
      id: this.createUserForm.controls['id'].value,
      username: this.createUserForm.controls['username'].value,
      firstName: this.createUserForm.controls['firstName'].value,
      lastName: this.createUserForm.controls['lastName'].value,
      email: this.createUserForm.controls['email'].value,
      password: this.createUserForm.controls['password'].value,
      phone: this.createUserForm.controls['phone'].value,
      userStatus: this.createUserForm.controls['userStatus'].value
    }
    this.userService.create(body).subscribe(() => this.router.navigate(['/user/login']))
  }

}
