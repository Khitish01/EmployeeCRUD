import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  baseUrl= 'http://localhost:3000/posts';
  constructor(private http:HttpClient) { }

  postEmployee(data:any) {
    return this.http.post(this.baseUrl, data);
  }
}
