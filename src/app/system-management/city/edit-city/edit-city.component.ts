import { Component, OnInit } from '@angular/core';
import { CityService } from 'src/app/Services/city.service';
import { City } from 'src/app/Module/city';
import { Router, ActivatedRoute } from "@angular/router";  

@Component({
  selector: 'app-edit-city',
  templateUrl: './edit-city.component.html',
  styleUrls: ['./edit-city.component.scss']
})
export class EditCityComponent implements OnInit {
  id: any;
  statesdata: any;
  city = new City();
  data: any;
  city_id: City;
  constructor(private cityservice: CityService, private route: Router, private route_: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.route_.snapshot.params.city_id;
    this.getstate();
    this.getbycity();
  }

  getstate(){
    this.cityservice.GetState().subscribe((data)=>{
      this.statesdata = data;
      console.log(this.statesdata);
    })
  }

  getbycity(){
    this.cityservice.GetByCity(this.id).subscribe((res)=>{
      this.data = res;
      this.city = this.data;
    })
  }

  UpdateCity(){
    this.cityservice.UpdateCity(this.id,this.city).subscribe((data)=>{
      this.route.navigate(['city']);
      console.log(this.id,this.city);
    })
  }

}
