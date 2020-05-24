import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Module/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router } from "@angular/router";  

@Component({
  selector: 'app-add-employee-management',
  templateUrl: './add-employee-management.component.html',
  styleUrls: ['./add-employee-management.component.scss']
})
export class AddEmployeeManagementComponent implements OnInit {
  countries: any;
  states: any;
  c_id: any;
  obj: any;
  cities: any;
  target: any;
  employee = new Employee();
  departments: any;
  divisions: any;
  files: any;
  fd: FormData;
  constructor(private countryservice: EmployeeService, private route: Router) { }

  ngOnInit() {
    this.getCountry();
    this.getDepartment();
    this.getDivision();
    // this.getState();
  }

  getCountry(){
    this.countryservice.GetCountry().subscribe((data)=>{
      this.countries = data;
      console.log(this.countries);
    })
  }

  getState(event){
    var obj = {
      c_id: event.target.value
    }
    this.countryservice.getStateData(obj).subscribe((data)=>{
      this.states = data;
      // console.log(data);
    });
    }

    getCity(event){
      var obj = {
        s_id: event.target.value
      }
      this.countryservice.getCity(obj).subscribe((data)=>{
        this.cities = data;
        // console.log(data);
      })
    }

    getDepartment(){
      this.countryservice.GetDepartment().subscribe((data)=>{
        this.departments = data;
        console.log(this.departments);
      })
    }

    getDivision(){
      this.countryservice.GetDivision().subscribe((data)=>{
        this.divisions = data;
        console.log(this.divisions);
      })
    }

    ImageUpload(event){
      this.files = event.target.files[0];
      console.log(event);
    }

    AddEmployee(){
      this.fd = new FormData;
      this.fd.append('file', this.files, this.files.name);
      this.fd.append('data',JSON.stringify(this.employee));

      this.countryservice.addEmployee(this.fd).subscribe((data)=>{
        console.log(this.fd);
        this.route.navigate(['employee-management']);
      })
    }

}
