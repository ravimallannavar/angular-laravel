import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/Module/employee';
import { EmployeeService } from 'src/app/Services/employee.service';
import { Router,ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-employee-management',
  templateUrl: './edit-employee-management.component.html',
  styleUrls: ['./edit-employee-management.component.scss']
})
export class EditEmployeeManagementComponent implements OnInit {
  countries: any;
  states: any;
  c_id: any;
  obj: any;
  cities: any;
  target: any;
  employee=new Employee();
  departments: any;
  divisions: any;
  files: any;
  fd: FormData;
  id: any;
  data: any;

  constructor(private countryservice: EmployeeService, private route: Router, private _route: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this._route.snapshot.params.emp_id;

    this.getCountry();
    this.getDepartment();
    this.getDivision();
    this.getData();
  }

  getCountry(){
    this.countryservice.GetCountry().subscribe((data)=>{
      this.countries = data;
      console.log(this.countries);
    })
  }

  getState(event){
    var obj = {
      c_id: event
    }
    this.countryservice.getStateData(obj).subscribe((data)=>{
      this.states = data;
      console.log(this.states);
    });
    }

    getCity(event){
      var obj = {
        s_id: event
      }
      this.countryservice.getCity(obj).subscribe((data)=>{
        this.cities = data;
        console.log(this.cities);
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

    getData(){
      this.countryservice.getOneEmployee(this.id).subscribe((res)=>{
        this.data = res;
        this.employee = this.data;
        // this.employee = res;
        if(this.employee.emp_countryid){
          this.getState(this.employee.emp_countryid);
        }
        if(this.employee.emp_stateid){
          this.getCity(this.employee.emp_stateid);
        }
  
        console.log(this.data);
      })
    }

    EditEmpData(){
      // this.employee.hobby = this.selectedArray.toString();
      let fd = new FormData();
      fd.append("file",this.files,this.files.name);
      fd.append("data",JSON.stringify(this.employee));
      // this.employee.hobby = this.selectedArray.toString();
  
      this.countryservice.updateEmployee(this.id,fd).subscribe(res=>{
        // alert(fd);
        console.log(this.id,fd);
        this.route.navigate(['employee-management']);

      })
    }

}
