import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  create(body: any) {
    return this.http.post("https://petstore.swagger.io/v2/user", body);
  }
}
