import { Component, inject, OnInit } from '@angular/core';
import { Employee } from '../../../model/Employee';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiResponse } from '../../../model/ApiResponse';

@Component({
  selector: 'app-add-employee',
  imports: [
    FormsModule 
  ],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.css'
})
export class AddEmployeeComponent implements OnInit{

  employeeObj: Employee = new Employee();
  employeeService = inject(EmployeeService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  isEdit:boolean = false;


  ngOnInit(): void {
    this.activatedRoute.queryParamMap.subscribe( param => {
      const id = param.get("id");
      if (id){
        this.getEmployeeById(+id); //The + Operator (Unary Plus): Convert string ID to number
        this.isEdit = true;
      }
    });

  }

  getEmployeeById(id: number){
    this.employeeService.getEmployeeById(id).subscribe(
      (res:ApiResponse) => {
        if(res.result == 'success'){
          this.employeeObj = res.data;
        }
      } 
    )
  }

  onAdd(){
    this.employeeService.createEmployee(this.employeeObj).subscribe(
      (res) =>{
        if(res.result == 'success'){
          this.router.navigate(['employee'], {queryParams : { showNotification: true, notificationMessage: 'Employee added successfully.'}})
        }
        else
          alert("failed");
      },
      (error) => {
        alert("failed");
      }
    )
  }

  onCancel(){
    this.router.navigateByUrl("employee");
  }

  onUpdateEmployee(id:any){
    this.employeeService.updateEmployee(id,this.employeeObj).subscribe(
      (res:ApiResponse) => {
        if(res.result == 'success'){
          this.router.navigate(['employee'], {queryParams : { showNotification: true, notificationMessage: 'Employee updated successfully.'}})
        }
      }
    );
  }


}
