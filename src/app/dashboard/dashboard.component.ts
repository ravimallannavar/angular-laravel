import { Component, OnInit } from '@angular/core';
import { ViewEncapsulation } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Module/employee';
// import { request } from 'http';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['../app.component.scss','./dashboard.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class DashboardComponent implements OnInit {
  employees: any;
  searchCount: any;
  totalCount:any;
  emps: any;

  constructor(private empservice: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
    this.getEmployeeData();
  }

  getEmployee(){
    this.empservice.getEmployeeData().subscribe((res:any)=>{
      this.employees = res.data;
      // this.searchCount = data.total_count;
      this.totalCount  = res.totalRecord;

      console.log(this.totalCount);
    })
  }

  getEmployeeData(){
    this.empservice.GetEmployee().subscribe((data)=>{
      this.emps = data;
      console.log(this.employees);
    })
  }

}
