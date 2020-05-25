import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Employee } from 'src/app/Module/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-selectemployee',
  templateUrl: './selectemployee.component.html',
  styleUrls: ['./selectemployee.component.css']
})
export class SelectemployeeComponent implements OnInit {
  employees: any;
  emps: any;
  first_name: any;
  data: any;
  employee=new Employee();
  emp: any;
  datas: any;
  

  constructor(private empservice: EmployeeService) { }

  imagePath:any = 'http://127.0.0.1:8050/public/image/';

  ngOnInit(): void {
    this.getEmployee();
    // this.changeempvalue();

  }

  getEmployee(){
    this.empservice.GetEmployee().subscribe((data)=>{
      this.datas = data;

      console.log(this.datas);
    })
  }

  changeempvalue(first_name: any): void{
    var selectedindex = first_name.target.selectedIndex;
    var selectedtext = first_name.target[selectedindex].text;

    this.empservice.GetselectEmployee(selectedtext).subscribe((data)=>{

//       this.data = res;

//       this.datas = this.data;
        this.employee = data;
      // this.datas = data;
       console.log(this.employee);
    })    
    console.log(selectedindex);
  }

  // GetselectEmployee

}

