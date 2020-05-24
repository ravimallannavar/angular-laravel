import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Module/user';
import { Router } from "@angular/router";
import { UserService } from 'src/app/Services/user.service';
// import { data } from 'jquery';
// import { data } from 'jquery';

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.scss']
})
export class ViewUserComponent implements OnInit {
  public show:boolean = false;
  users: any;
  user_name: any;
  first_name: any;
  last_name: any;
  email_address: any;
  user_id: any;

  constructor(private userservice: UserService, private route: Router) { 
    setTimeout(() =>{  
      this.show = true;  
    }, 5000);  
  }

  ngOnInit() {
    this.getUser();
  }

  toggle(){
    this.show =!this.show;
  }

  getUser(){
    this.userservice.GetUser().subscribe((data)=>{
      this.users = data;
      console.log(this.users);
    })
  }

  filterUser(){
    this.userservice.FilterUser(this.user_name, this.first_name, this.last_name, this.email_address).subscribe((data)=>{
      this.users = data;
    })
  }

  deleteUser(user_id){
    this.userservice.DeleteUser(user_id).subscribe((data)=>{
      this.getUser();
      console.log(user_id);
    })
  }

  edituser(u: any){
    this.route.navigate(['edit-user', u.user_id]);
  }

}
