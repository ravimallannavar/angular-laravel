import { Injectable } from '@angular/core';
import { User } from 'src/app/Module/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private http: HttpClient) { }

  AddSignIn(user:User){
    return this.http.post('http://127.0.0.1:8050/addUser',user);
  }

  GetUser() {
    return this.http.get('http://127.0.0.1:8050/getUser');
  }

  FilterUser(user_name: any, first_name: any, last_name: any, email_address: any) {
    return this.http.get(`http://127.0.0.1:8050/searchUser/${user_name}/${first_name}/${last_name}/${email_address}`);
  }

  DeleteUser(user_id: any) {
    return this.http.delete('http://127.0.0.1:8050/deleteUser/'+user_id);
  }

  GetByUser(user_id: any) {
    return this.http.get('http://127.0.0.1:8050/GetByUser/'+user_id);
  }

  UpdateUser(user_id: any, user: User) {
    return this.http.put('http://127.0.0.1:8050/updateUser/'+user_id,user);
  }
 



}
