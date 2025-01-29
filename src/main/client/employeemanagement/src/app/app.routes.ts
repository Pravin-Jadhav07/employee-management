import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { ProjectComponent } from './pages/project/project.component';
import { ProjectEmployeesComponent } from './pages/project-employees/project-employees.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { AddProjectComponent } from './pages/project/add-project/add-project.component';

export const routes: Routes = [

    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},

    {   path:'', 
        component:LayoutComponent,
        children:[
            {path:'dashboard', component:DashboardComponent},
            {path:'employee', component:EmployeeComponent},
            {path:'add-employee', component:AddEmployeeComponent},
            {path:'project-employee', component:ProjectEmployeesComponent},
            {path:'project', component:ProjectComponent},
            {path:'add-project',component:AddProjectComponent},
        ]
    }

];
