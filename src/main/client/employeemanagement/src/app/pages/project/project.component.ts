import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../../model/Project';
import { ProjectService } from './project.service';
import { ApiResponse } from '../../model/ApiResponse';
import { NotificationComponent } from '../../utility/notification/notification.component';

@Component({
  selector: 'app-project',
  imports: [NotificationComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css',
})
export class ProjectComponent implements OnInit {
  router = inject(Router);
  projectService = inject(ProjectService);
  activatedRoute = inject(ActivatedRoute);
  projectList: Project[] = [];
  showNotification: boolean = false;
  notificationMessage: string = '';

  ngOnInit(): void {
    this.getAllProject();

    if (this.activatedRoute.snapshot.queryParams['showNotification']) {
      this.showNotification = true;
      this.notificationMessage = this.activatedRoute.snapshot.queryParams['notificationMessage'];
    }
  }

  getAllProject() {
    this.projectService.getAllProject().subscribe((res: ApiResponse) => {
      this.projectList = res.data;
    });
  }

  onAddNewProject() {
    this.router.navigateByUrl('add-project');
  }

  onDeleteProject(id: any) {
    this.resetNotification();
    this.projectService.deleteProjectById(id).subscribe((res: ApiResponse) => {
      if (res.result == 'success') {
        this.showNotification = true;
        this.notificationMessage = 'Project deleted successfully.';
        this.getAllProject();
      }
    });
  }

  onEditProject(id: any) {
    this.router.navigate(['/add-project'], { queryParams: { id } });
  }

  resetNotification() {
    this.showNotification = false;
    this.notificationMessage = '';
  }





}
