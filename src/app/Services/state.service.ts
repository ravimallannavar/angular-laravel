import { Injectable } from '@angular/core';
import { State } from 'src/app/Module/state';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StateService {
 
  constructor(private http: HttpClient) { }


  GetState() {
    return this.http.get('http://127.0.0.1:8050/state');
  }

  ADDState(state: State) {
    return this.http.post('http://127.0.0.1:8050/addstate',state);
  }

  GetCountry() {
    return this.http.get('http://127.0.0.1:8050/country');
  }

  Filterstatename(state_name: any) {
    return this.http.get('http://127.0.0.1:8050/searchbystate/'+state_name);
  }

  GetByState(state_id: any) {
    return this.http.get('http://127.0.0.1:8050/getbystate/'+state_id);
  }

  EDITState(state_id: any, state: State) {
    return this.http.put('http://127.0.0.1:8050/updatestate/'+state_id,state);

  }

  DeleteState(state_id: any) {
 return this.http.delete('http://127.0.0.1:8050/deletestate/'+state_id);
  }
 

  // AddState(state: State){
  //   return this.http.post('http://127.0.0.1:8050/state/', state);
  // }

}
