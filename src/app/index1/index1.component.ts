import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Module/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index1',
  templateUrl: './index1.component.html',
  styleUrls: ['./index1.component.scss']
})
export class Index1Component implements OnInit {

  constructor(private empdataservice: EmployeeService, private route: Router, private _route: ActivatedRoute) { }


  ngOnInit() {
  }

}
