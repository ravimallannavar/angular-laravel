import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from 'src/app/Module/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {


  employee: any;
  
  constructor(private http: HttpClient) { }
  
  // employees: Employee;
  // employee: any;
  // employee: any;

  getmonth() {
    return this.http.get('http://127.0.0.1:8050/getChart');
  }

  getyear() {
    return this.http.get('http://localhost:3000/yeardata');
  }

  getOneEmployee(id){
    // return this.http.get<Employee>(`http://127.0.0.1:8050/GetByEmployee/${id}`);
    return this.http.get<Employee>(`http://127.0.0.1:8050/GetByEmployee/${id}`);

   }

   getEmployeeData(){
    return this.http.get('http://127.0.0.1:8050/getEmployees');
   }
 
  addEmployee(fd: any) {
    return this.http.post('http://127.0.0.1:8050/addemployee',fd);
  }
  GetDivision() {
    return this.http.get('http://127.0.0.1:8050/division');
  }
  GetDepartment() {
    return this.http.get('http://127.0.0.1:8050/department');
  }
  getCity(data: any) {
    return this.http.post('http://127.0.0.1:8050/getcitydata',data);
    // return this.http.post('http://127.0.0.1:8000/state',data);

  }
  getStateData(data: any) {
    return this.http.post('http://127.0.0.1:8050/getstatedata',data);
  }

  // constructor(private http: HttpClient) { }

  GetEmployee() {
    return this.http.get('http://127.0.0.1:8050/getEmployee');
  }

  GetselectEmployee(first_name: any){
    return this.http.get('http://127.0.0.1:8050/filteremployeebyname/'+first_name);
  }

  FilterDept(first_name: any, department_name: any) {
    return this.http.get(`http://127.0.0.1:8050/filteremployee/${first_name}/${department_name}`);
  }

  GetCountry() {
    return this.http.get('http://127.0.0.1:8050/country');
  }

  DeleteEmp(emp_id: any){
    return this.http.delete('http://127.0.0.1:8050/deleteEmployee/'+emp_id);
  }

  updateEmployee(id,fd) {
    return this.http.post('http://127.0.0.1:8050/updateEmployee/'+id,fd);

  }

}
