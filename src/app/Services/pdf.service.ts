import { Injectable } from '@angular/core';
import { Employee } from 'src/app/Module/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  

  constructor(private http: HttpClient) { }
  
  GetEmployee() {
    return this.http.get('http://127.0.0.1:8050/getReport');

  }
}
