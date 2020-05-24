import { Component, OnInit } from '@angular/core';
// import { Login } from 'src/app/Module/login';
import { LoginService } from 'src/app/Services/login.service';
import { User } from 'src/app/Module/user';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  errorMessage: string;
  users: Object;

  constructor(private loginservice: LoginService, private route: Router) {
    
   }
  IsLoggined:boolean = true;
  // user=new User();
  user = new User();
status : any;
  // Result: any;
  ngOnInit() {
  }

  UserLogIn(){
    
    this.loginservice.Login(this.user).subscribe((data:any)=>{
     if(data.status == 'success'){
       console.log(this.user);
       this.route.navigate(['dashboard']);
       return true;
     }else{
       window.alert(data.msg);
       return false;
     }
    })
  }

 
}