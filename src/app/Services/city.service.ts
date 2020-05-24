import { Injectable } from '@angular/core';
import { City } from 'src/app/Module/city';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  CitySearch(city_name: any) {
    return this.http.get(`http://127.0.0.1:8050/CitySearch/${city_name}`);
  }

  constructor(private http: HttpClient) { }

  GetCity() {
    return this.http.get('http://127.0.0.1:8050/getcity');
  }

  GetState() {
    return this.http.get('http://127.0.0.1:8050/state');
  }

  AddCity(city: City){
    return this.http.post('http://127.0.0.1:8050/addcity',city);
  }

  GetByCity(city_id: any){
    return this.http.get('http://127.0.0.1:8050/getbycity/'+city_id);
  }
  
  UpdateCity(city_id: any, city: City){
    return this.http.put('http://127.0.0.1:8050/UpdateCity/'+city_id,city);
  }

  deleteCity(city_id: any) {
    return this.http.delete('http://127.0.0.1:8050/deleteCity/'+city_id);
   }

}
