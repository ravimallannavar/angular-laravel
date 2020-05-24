import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Module/user';
import { Router } from "@angular/router";
import { UserService } from 'src/app/Services/user.service';
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private userserice: UserService, private route: Router) { }

  user=new User();
  // employee=new Employee();


  ngOnInit() {
    
  }

  AddUser(){
  this.userserice.AddSignIn(this.user).subscribe(res=>{
    // alert(fd);
    this.route.navigate(['/view-user']);
    console.log(this.user);
  })
}

}
