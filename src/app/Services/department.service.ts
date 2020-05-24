import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Department } from 'src/app/Module/department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  departments: Department[];

  department: any;


  constructor(private http: HttpClient) { }

  GetDepartment(){
    return this.http.get('http://127.0.0.1:8050/department');
  }

  AddDepartment(department: Department){
    return this.http.post('http://127.0.0.1:8050/adddepartment',department);
  }

  GetByIdDepartment(dept_id: any){
    return this.http.get<Department>(`http://127.0.0.1:8050/getOnedepartment/${dept_id}`);
    // return this.http.get<Department>('http://127.0.0.1:8000/getOnedepartment/'+dept_id);

  }

  UpdateDepartment(dept_id,department){
    return this.http.patch('http://127.0.0.1:8050/updatedepartment/'+dept_id,department);
    // return this.http.post('http://127.0.0.1:8000/updateemployee/'+id,employee);

  }

  DeleteDepartment(dept_id:number){
    return this.http.delete('http://127.0.0.1:8050/deletedepartment/' + dept_id);
  }

  searchbydeptname(dept_name:any){
    return this.http.get('http://127.0.0.1:8050/searchbydeptname/' + dept_name);
    // return this.http.get('http://127.0.0.1:8050/searchbyname/'+div_name);
  }

}
