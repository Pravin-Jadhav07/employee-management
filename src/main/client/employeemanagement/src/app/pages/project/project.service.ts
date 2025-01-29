import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Project } from '../../model/Project';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../model/ApiResponse';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {


  url: string = "http://localhost:8080/projects";
  constructor(private http:HttpClient) { }


  addProject(project:Project){
    return this.http.post<ApiResponse>(`${this.url}`,project);
  }

  getAllProject(){
    return this.http.get<ApiResponse>(this.url);
  }

  getProjectById(id:number){
    return this.http.get<ApiResponse>( `${this.url}/${id}`);
  }

  deleteProjectById(id:number){
    return this.http.delete<ApiResponse>( `${this.url}/${id}`);
  }

  updateProject(id:any,project:Project){
    return this.http.put<ApiResponse>( `${this.url}/${id}`,project);
  }
}
