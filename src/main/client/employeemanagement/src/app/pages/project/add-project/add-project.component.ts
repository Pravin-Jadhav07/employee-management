import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../../model/Project';
import { FormsModule } from '@angular/forms';
import { ProjectService } from '../project.service';
import { ApiResponse } from '../../../model/ApiResponse';
import { EmployeeService } from '../../employee/employee.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-add-project',
  imports: [
    FormsModule,
    NgFor
  ],
  templateUrl: './add-project.component.html',
  styleUrl: './add-project.component.css'
})
export class AddProjectComponent implements OnInit{


  router = inject(Router);
  projectObj: Project = new Project();
  projectService = inject(ProjectService);
  employeeService = inject(EmployeeService);
  isEdit: boolean = false;
  employeeList: any;


  constructor(private activatedRoute:ActivatedRoute){}

  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe( param => {
      const id = param.get("id");
      if (id){
        this.getProjectById(+id); //The + Operator (Unary Plus): Convert string ID to number
        this.isEdit = true;
      }
    });

    this.getEmployeeForDropdown();

  }

  getProjectById(id: number) {
    this.projectService.getProjectById(id).subscribe( (res:ApiResponse) => {
      if( res.result == 'success' ){
        this.projectObj = res.data;
      }
    });
  }

  onCancel(){
    this.router.navigateByUrl("project");
  }

  onAddProject(){
    this.projectService.addProject(this.projectObj).subscribe(
      (res:ApiResponse) => {
        if(res.result == 'success'){
          this.router.navigate(['project'],  { queryParams : { showNotification: true, notificationMessage: 'Project added successfully.'}});
        }
        else{
          alert("Project adding failed.");
        }
      }
    )
  }

  onUpdateProject(id:any){
    this.projectService.updateProject(id,this.projectObj).subscribe(
      (res:ApiResponse) => {
        if(res.result == 'success'){
          this.router.navigate(['project'],  { queryParams : { showNotification: true, notificationMessage: 'Project updated successfully.'}});
        }
        else{
          alert("Project adding failed.");
        }
      }
    )
  }


  getEmployeeForDropdown(){
    this.employeeService.getAllEmployees().subscribe(
      res => {
        this.employeeList = res.data;
      }
    )
  }




}
