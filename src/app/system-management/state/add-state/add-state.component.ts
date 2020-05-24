import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/Module/state';
import { StateService } from 'src/app/Services/state.service';
import { Router } from "@angular/router";  

@Component({
  selector: 'app-add-state',
  templateUrl: './add-state.component.html',
  styleUrls: ['./add-state.component.scss']
})
export class AddStateComponent implements OnInit {
  countries: any;
  states:any;
  state = new State();
  statelist = [];
  countriesdata:any;
  constructor(private stateservice: StateService, private route: Router) { }

  ngOnInit() {
    this.getcountry();
  }

  getcountry(){
    this.stateservice.GetCountry().subscribe((data)=>{
      this.countriesdata = data;
      console.log(this.countriesdata);
    })
  }

  AddState(){
    this.stateservice.ADDState(this.state).subscribe((data)=>{
      this.route.navigate(['state']);
      console.log(this.states);
    })
  }

}
