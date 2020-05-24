import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/Module/department';
import { Router } from "@angular/router";  

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.scss']
})
export class AddDepartmentComponent implements OnInit {
  department=new Department();
  constructor(private deptservice:DepartmentService, private route: Router ) { }

 
  ngOnInit() {}

  Adddepartment(){
    this.deptservice.AddDepartment(this.department).subscribe((data)=>{
      this.route.navigate(['department']);
      console.log(this.department);
    })
  }

}
