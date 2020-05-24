import { Injectable } from '@angular/core';
import { Employee } from 'src/app/Module/employee';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  

  constructor(private http: HttpClient) { }

  GetReport() {
   return this.http.get('http://127.0.0.1:8050/getReport');
  }

  GetReportFilter(birthday: any, hiered_date: any) {
    return this.http.get(`http://127.0.0.1:8050/reportfilter/${birthday}/${hiered_date}`);
  }

}
