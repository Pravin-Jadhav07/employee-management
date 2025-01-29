import { Component, inject, OnInit } from '@angular/core';
import { EmployeeService } from './employee.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../../model/Employee';
import { NotificationComponent } from '../../utility/notification/notification.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    NotificationComponent
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit{

  employeeService = inject(EmployeeService);
  router = inject(Router)
  activatedRoute = inject(ActivatedRoute);
  employeeList: Employee[] = [];
  showNotification:boolean = false;
  notificationMessage:string = '';

  ngOnInit(): void {
    this.getAllEmployees();

    if (this.activatedRoute.snapshot.queryParams['showNotification']) {
      this.showNotification = true;
      this.notificationMessage = this.activatedRoute.snapshot.queryParams['notificationMessage'];
    }
  }

  getAllEmployees() {
    this.employeeService.getAllEmployees().subscribe(
      (res) =>{
        this.employeeList = res.data;
      }
    )
  }

  onAddNew(){
    this.router.navigateByUrl("/add-employee");
  }

  onDelete(id:any){
    this.resetNotification();
    this.employeeService.deleteEmployee(id).subscribe(
      (res) => {
        this.showNotification = true;
        this.notificationMessage = 'Employee deleted successfully.';
        this.getAllEmployees();
      }
    )
  }

  resetNotification() {
    this.showNotification = false;
    this.notificationMessage = '';
  }

  onEdit(id:any){
    this.router.navigate(['/add-employee'], { queryParams: { id } });
  }





}
