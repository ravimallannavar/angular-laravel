import { Component, OnInit } from '@angular/core';
import { DepartmentService } from 'src/app/Services/department.service';
import { Department } from 'src/app/Module/department';
import { Router, ActivatedRoute } from "@angular/router";  

@Component({
  selector: 'app-edit-department',
  templateUrl: './edit-department.component.html',
  styleUrls: ['./edit-department.component.scss']
})
export class EditDepartmentComponent implements OnInit {
  id: any;
  dept_id: any;
  data: any;
  // department:any;
  department=new Department();
  constructor(private departmentservice: DepartmentService, private route: Router, private route_: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route_.snapshot.params.dept_id;
    this.getOneDepartment();
  }

  getOneDepartment(){
    this.departmentservice.GetByIdDepartment(this.id).subscribe(res=>{
      // this.data = res; 
      // this.department = this.data;
      this.department = res;

      console.log(this.id);
    })
  }

  Editdepartment(){
    this.departmentservice.UpdateDepartment(this.id,this.department).subscribe(res=>{
      console.log(this.id);
      this.route.navigate(['department']);
    })
  }



}
