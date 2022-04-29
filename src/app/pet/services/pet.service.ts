import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http: HttpClient ) { }
  getAll(status: any){
    return this.http.get(`https://petstore.swagger.io/v2/pet/findByStatus?status=${status}`);
  }
  createPet(body: Object) {
    return  this.http.post("https://petstore.swagger.io/v2/pet",body);
  }
}
