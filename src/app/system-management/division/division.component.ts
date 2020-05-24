import { Component, OnInit, ViewChild } from '@angular/core';
import { DivisionService } from 'src/app/Services/division.service';
import { Division } from "src/app/Module/division";
import { Router } from "@angular/router";  
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.scss']
})
export class DivisionComponent implements OnInit {
  @ViewChild('myForm', {static: false}) public createEmployeeForm: NgForm;

  public show:boolean = false;
  divisions: any;
  division=new Division();
  // successMessage: string = '';
  successMessage: string = '';
  errorMessage: string = '';
  data:any;
  div_name: any;
  myForm: any;

  constructor(private divisionservice: DivisionService, private route: Router) {
    setTimeout(() =>{  
      this.show = true;  
    }, 5000);  

   }

  ngOnInit() {
    this.getDivision();
  }

  toggle(){
    this.show =!this.show;
  }

  getDivision(){
    this.divisionservice.GetDivision().subscribe((data)=>{
      this.divisions = data;
      console.log(this.divisions);
    })
  }

  editdivision(u){
    this.route.navigate(['/edit-division', u.div_id]);
  }

  deletedivision(div_id){
    this.divisionservice.DeleteDivision(div_id).subscribe(
      (data) => {
      
      this.getDivision();
      this.successMessage = 'Division was Deleted';
      console.log('division was Deleted');
    },
    err=> {
      this.errorMessage = 'Division was not Deleted';
      console.log(err);

    }
    )
  }
 

  searchbyname(){
    this.divisionservice.SearchByName(this.div_name).subscribe((data:any)=>{
      this.divisions = data;
      this.createEmployeeForm.reset({
        div_name:''
      })
      console.log(this.div_name);
    })
    // alert(this.div_name);
  }

// deleteDivision
}
