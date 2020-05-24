import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/Services/country.service';
import { Country } from 'src/app/Module/country';
import { Router, ActivatedRoute } from "@angular/router";  
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit-country',
  templateUrl: './edit-country.component.html',
  styleUrls: ['./edit-country.component.scss']
})
export class EditCountryComponent implements OnInit {

  country = new Country();
  data: any;
  id:any;
  country_id:any;
  constructor(private countryservice: CountryService, private route: Router, private route_: ActivatedRoute) { }

  

  ngOnInit() {
    this.id=this.route_.snapshot.params.country_id;
    this.getbycountry();
  }

  getbycountry(){
    this.countryservice.GetByCountry(this.id).subscribe((res)=>{
      this.data = res;
      this.country = this.data;
      console.log(this.country);
    })
  }

  updatecountry(){
    this.countryservice.UpdateCountry(this.id, this.country).subscribe((data)=>{
      this.route.navigate(['country']);
      console.log(this.id);
    })
  }

}
