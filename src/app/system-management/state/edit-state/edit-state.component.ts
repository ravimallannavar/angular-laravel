import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/Module/state';
import { StateService } from 'src/app/Services/state.service';
import { Router, ActivatedRoute } from "@angular/router";  


@Component({
  selector: 'app-edit-state',
  templateUrl: './edit-state.component.html',
  styleUrls: ['./edit-state.component.scss']
})
export class EditStateComponent implements OnInit {
  countries: any;
  states:any;
  state = new State();
  statelist = [];
  countriesdata:any;
  id: any;
  data: any;
  constructor(private stateservice: StateService, private route: Router, private route_: ActivatedRoute) { }

  ngOnInit() {
    this.id=this.route_.snapshot.params.state_id;
    this.getcountry();
    this.getOneState();
  }

  getcountry(){
    this.stateservice.GetCountry().subscribe((data)=>{
      this.countriesdata = data;
      console.log(this.countriesdata);
    })
  }

  getOneState(){
    this.stateservice.GetByState(this.id).subscribe((res)=>{
      this.data=res;
      this.state=this.data;
      console.log(this.id);
    })
  }

  EditState(){
    this.stateservice.EDITState(this.id,this.state).subscribe((data)=>{
      this.route.navigate(['state']);
      console.log(this.id,this.state);
    })
  }

}
