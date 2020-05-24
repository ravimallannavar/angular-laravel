import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/Module/state';
import { StateService } from 'src/app/Services/state.service';

import { Router } from "@angular/router";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.scss']
})
export class StateComponent implements OnInit {

  public show: boolean = false;
  states: any;
  state_name: any;
  state: any;

  constructor(private stateservice: StateService, private route: Router) {
    setTimeout(() => {
      this.show = true;
    }, 5000);

  }

  ngOnInit() {
    this.getState();
  }

  toggle() {
    this.show = !this.show;
  }

  getState() {
    this.stateservice.GetState().subscribe((data) => {
      this.states = data;
      console.log(this.states);
    })
  }

  filterstatename() {
    this.stateservice.Filterstatename(this.state_name).subscribe((data) => {
      this.states = data;
      console.log(this.state_name);
    })
  }

  editstate(u: any) {
    this.route.navigate(['edit-state', u.state_id]);
  }

  deletestate(state_id) {
    this.stateservice.DeleteState(state_id).subscribe((data) => {
      this.getState();
      console.log(state_id);
    })
  }

}
