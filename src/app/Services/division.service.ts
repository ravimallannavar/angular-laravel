import { Injectable } from '@angular/core';
import { Division } from "src/app/Module/division";
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {
 

  constructor(private http: HttpClient) { }

  GetDivision(){
    return this.http.get('http://127.0.0.1:8050/division');
  }

  AddDivision(division: Division){
    return this.http.post('http://127.0.0.1:8050/addDivision',division);
  }

  GetByDivision(div_id:any){
    return this.http.get('http://127.0.0.1:8050/getbydivision/'+div_id);
  }

  UpdateDivision(div_id,division){
    return this.http.patch('http://127.0.0.1:8050/updatedivision/'+div_id,division);
  }

  DeleteDivision(div_id:number){
    return this.http.delete('http://127.0.0.1:8050/deleteDivision/'+div_id);
  }

  SearchByName(div_name: any){
    return this.http.get('http://127.0.0.1:8050/searchbyname/'+div_name);
  }
}
