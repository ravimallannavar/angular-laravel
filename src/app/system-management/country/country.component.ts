import { Component, OnInit, ViewChild } from '@angular/core';
import { CountryService } from 'src/app/Services/country.service';
import { Country } from 'src/app/Module/country';
import { Router } from "@angular/router";  
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  @ViewChild('myForm', {static: false}) public createEmployeeForm: NgForm;
  public show:boolean = false;
  countries:any;
  country_code: any;
  country_name: any;
  // myForm: any;
  // order = "country_code";
ascending = true;
  constructor(private countryservice: CountryService, private route: Router) {
    setTimeout(() =>{  
      this.show = true;  
    }, 5000);  

   }

  ngOnInit() {
    this.getCountry();
  }

  toggle(){
    this.show =!this.show;
  }

  getCountry(){
    this.countryservice.GetCountry().subscribe((data)=>{
      this.countries = data;
      console.log(this.countries);
    })
  }

  filtercountry(){
    this.countryservice.FilterCountry(this.country_code, this.country_name).subscribe((data)=>{
      this.countries = data;
      this.createEmployeeForm.reset({
        country_code:'',
        country_name:''

      })
      console.log(this.country_code, this.country_name);
    })
  }  

  editcountry(u:any){
    this.route.navigate(['edit-country',u.country_id]);
  }

  deletecountry(country_id: any){
    this.countryservice.DeleteCountry(country_id).subscribe((data)=>{
      this.getCountry();
      console.log(country_id);
    })
  }

}
