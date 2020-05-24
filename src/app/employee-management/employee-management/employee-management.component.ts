import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Module/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-management',
  templateUrl: './employee-management.component.html',
  styleUrls: ['./employee-management.component.scss']
})
export class EmployeeManagementComponent implements OnInit {
  employees: any;
  public show: boolean = false;
  first_name: any;
  department_name: any;
  totalCount: any;

  constructor(private empservice: EmployeeService, private route: Router) {
    setTimeout(() => {
      this.show = true;
    }, 5000);
   }

   imagePath:any = 'http://127.0.0.1:8050/public/image/';

  ngOnInit() {
    this.getEmployee();
  }

  toggle() {
    this.show = !this.show;
  }

  getEmployee(){
    this.empservice.GetEmployee().subscribe((data)=>{
      this.employees = data;
      // this.searchCount = data.total_count;
      // this.totalCount  = res.totalRecord;
      console.log(this.employees);
    })
  }

  filterdeptname(){
    this.empservice.FilterDept(this.first_name, this.department_name).subscribe((data)=>{
      this.employees = data;
      console.log(this.employees);
    })
  }

  deleteemp(emp_id: any){
    this.empservice.DeleteEmp(emp_id).subscribe((data)=>{
      this.getEmployee();
      console.log(emp_id);
    })
  }

  editemp(u){
    this.route.navigate(['edit-employee-management', u.emp_id]);
  }

}
