import { Component, OnInit, ViewChild } from '@angular/core';
import { CityService } from 'src/app/Services/city.service';
import { City } from 'src/app/Module/city';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {
  @ViewChild('myForm', {static: false}) public createEmployeeForm: NgForm;
  public show:boolean = false;
  
  Cities: any;
  city_name: any;
  city_id: any;
  constructor(private cityservice: CityService, private route: Router) {
    setTimeout(() =>{  
      this.show = true;  
    }, 5000);  

   }

  ngOnInit() {
    this.getcity();
  }

  toggle(){
    this.show =!this.show;
  }

  getcity(){
    this.cityservice.GetCity().subscribe((data)=>{
      this.Cities = data;
      
      console.log(this.Cities);
    })
  }

  citysearch(){
    this.cityservice.CitySearch(this.city_name).subscribe((data)=>{
      this.Cities = data;
      this.createEmployeeForm.reset({
        city_name:'',
      })
      console.log(this.Cities);
    })
  }

  editcity(u){
    this.route.navigate(['edit-city', u.city_id]);
  }

  deletecity(city_id){
    this.cityservice.deleteCity(city_id).subscribe((data)=>{
      this.getcity();
      console.log(city_id);
    })
  }

}
