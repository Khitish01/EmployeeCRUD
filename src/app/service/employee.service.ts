import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl:string= 'http://localhost:3000/posts';
  constructor(private http:HttpClient) { }

  postEmployee(data:any) {
    return this.http.post(this.baseUrl, data);
  }

  getEmployee(){
    return this.http.get(this.baseUrl);
  }
}
