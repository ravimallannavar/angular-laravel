import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/Services/country.service';
import { Country } from 'src/app/Module/country';
import { Router } from "@angular/router";  
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-country',
  templateUrl: './add-country.component.html',
  styleUrls: ['./add-country.component.scss']
})
export class AddCountryComponent implements OnInit {
  country = new Country();
  constructor(private countryservice: CountryService, private route: Router) { }

  ngOnInit() {
  }

  Addcountry(){
    this.countryservice.AddCountry(this.country).subscribe((data)=>{
      this.route.navigate(['country']);
      console.log(this.country);
    })
  }

}
