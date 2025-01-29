import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../../model/Employee';
import { ApiResponse } from '../../model/ApiResponse';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  
  path = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) {}

  getAllEmployees(): Observable<any> {
    return this.http.get(`${this.path}/`);
  }

  createEmployee(employee: Employee): Observable<any> {
    return this.http.post(`${this.path}/`, employee);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.path}/${id}`);
  }

  getEmployeeById(id: number) {
    return this.http.get<ApiResponse>(`${this.path}/${id}`);
  }

  updateEmployee(id: any, employee: Employee) {
    return this.http.put<ApiResponse>(`${this.path}/${id}`,employee);
  }
}
