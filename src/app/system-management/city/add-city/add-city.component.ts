import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Services/city.service';
import { City } from 'src/app/Module/city';
import { Router } from "@angular/router";  

@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.scss']
})
export class AddCityComponent implements OnInit {
  statesdata: any;
  city = new City();
  constructor(private cityservice: CityService, private route: Router) { }

  ngOnInit() {
    this.getstate();
  }

  getstate(){
    this.cityservice.GetState().subscribe((data)=>{
      this.statesdata = data;
      console.log(this.statesdata);
    })
  }

  AddCity(){
    this.cityservice.AddCity(this.city).subscribe((data)=>{
      this.route.navigate(['city']);
      console.log(this.city);
    })
  }

}
