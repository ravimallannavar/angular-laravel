import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/Module/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  Login(user: User){
    return this.http.post('http://127.0.0.1:8050/login', user);
  }

  // GetUser() {
  //   return this.http.get('http://127.0.0.1:8050/getUser');
  // }

}
