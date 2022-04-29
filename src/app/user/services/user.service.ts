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

  login(username: string, password: string) {
    return this.http.get(`https://petstore.swagger.io/v2/user/login?username=${username}&password=${password}`);
  }
}
