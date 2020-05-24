import { Component, OnInit } from '@angular/core';
import { DivisionService } from 'src/app/Services/division.service';
import { Division } from "src/app/Module/division";
import { Router, ActivatedRoute } from "@angular/router";  
@Component({
  selector: 'app-edit-division',
  templateUrl: './edit-division.component.html',
  styleUrls: ['./edit-division.component.scss']
})
export class EditDivisionComponent implements OnInit {

  constructor(private divisionservice: DivisionService, private route: Router, private route_:ActivatedRoute) { }
  id:any;
  div_id:any;
  data:any;
  division=new Division();
  // department: any;
  ngOnInit() {
    this.id=this.route_.snapshot.params.div_id;
    this.getOneDivision();
  }

  getOneDivision(){
    this.divisionservice.GetByDivision(this.id).subscribe((res)=>{
      this.data=res;
      this.division=this.data;
      console.log(this.division);
    })
  }

  Editdivision(){
    this.divisionservice.UpdateDivision(this.id,this.division).subscribe((res)=>{
      console.log(this.id,this.division);
      this.route.navigate(['division']);
    })
  }



}
