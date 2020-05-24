import { Component, OnInit } from '@angular/core';
import { DivisionService } from 'src/app/Services/division.service';
import { Division } from "src/app/Module/division";
import { Router } from "@angular/router";  

@Component({
  selector: 'app-add-division',
  templateUrl: './add-division.component.html',
  styleUrls: ['./add-division.component.scss']
})
export class AddDivisionComponent implements OnInit {

  division=new Division(); 
  constructor(private divisionservice: DivisionService, private route: Router) { }

  ngOnInit() {
  }

  Adddivision(){
    this.divisionservice.AddDivision(this.division).subscribe((data)=>{
      console.log(this.division);
      this.route.navigate(['/division']);
    })
  }

}
