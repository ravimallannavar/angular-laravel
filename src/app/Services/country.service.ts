import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Country } from 'src/app/Module/country';


@Injectable({
  providedIn: 'root'
})
export class CountryService {

  // departments: Department[];

  country: any;
  

  constructor(private http: HttpClient) { }

  GetCountry(){
    return this.http.get('http://127.0.0.1:8050/country');
  }

  AddCountry(country: Country) {
    return this.http.post('http://127.0.0.1:8050/addcountry',country);
  }
  

  FilterCountry(country_code: any, country_name: any) { 
    return this.http.get(`http://127.0.0.1:8050/filtercountry/${country_code}/${country_name}`);
  }

  GetByCountry(country_id: any) {
    // return this.http.get(`http://127.0.0.1:8050/getbycountry/${country_id}`);
    return this.http.get('http://127.0.0.1:8050/getbycountry/'+country_id);
  }

  UpdateCountry(country_id,country){
    return this.http.put('http://127.0.0.1:8050/updatecountry/'+country_id,country);
  }

  DeleteCountry(country_id: any) {
    return this.http.delete('http://127.0.0.1:8050/deletecountry/'+country_id);
  }

  
}
