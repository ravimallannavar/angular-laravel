import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/Module/department';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {
  @ViewChild('myForm', {static: false}) public createEmployeeForm: NgForm;
   departments: any;
  public show:boolean = false;
  dept_name:any;
  searchForm: any;
  myForm: any;
  constructor(private departmentservice: DepartmentService, private route: Router) {
    setTimeout(() =>{  
      this.show = true;  
    }, 5000);  
   }

  ngOnInit() {
    this.getDepartment();
  }

  toggle(){
    this.show =!this.show;
  }


  getDepartment(): void{
    this.departmentservice.GetDepartment().subscribe(res => {
      this.departments = res;
      console.log(this.departments);
    });

  }

  editdepartment(u){
    this.route.navigate(['/edit-department', u.dept_id]);
  }

  deletedepartment(dept_id){
    this.departmentservice.DeleteDepartment(dept_id).subscribe((data)=>{
      this.getDepartment();
      console.log(dept_id);
    })
  }

 
  searchbydept() {
    this.departmentservice.searchbydeptname(this.dept_name).subscribe((data:any)=>{
      this.departments = data;
     this.createEmployeeForm.reset({
       dept_name:''
     })


      console.log(this.dept_name);
    })
    // alert(this.div_name);
  }

}
