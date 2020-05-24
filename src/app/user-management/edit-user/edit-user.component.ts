import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Module/user';
import { Router, ActivatedRoute } from "@angular/router";
import { UserService } from 'src/app/Services/user.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  id: any;
  data: any;

  constructor(private userserice: UserService, private route: Router, private route_: ActivatedRoute) { }
  user=new User();

  ngOnInit() {
    this.id = this.route_.snapshot.params.user_id;
    this.getbyUser();
  }

  UpdateUser(){
    this.userserice.UpdateUser(this.id,this.user).subscribe((data)=>{
      this.route.navigate(['/view-user']);
      console.log(this.id,this.user);
    })
  }

  getbyUser(){
    this.userserice.GetByUser(this.id).subscribe((res)=>{
      this.data = res;
      this.user = this.data;
      console.log(this.id);
    })
  }


}
