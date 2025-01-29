package com.jadhav.employeemanagement.Service;

import com.jadhav.employeemanagement.Dao.ProjectDao;
import com.jadhav.employeemanagement.Entities.Project;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class ProjectService {

    @Autowired
    ProjectDao projectDao;
    public List<Project> getAllProjects() {
        return projectDao.getAllProjects();
    }

    public Project createProject(Project project) {
        return projectDao.createProject(project);
    }

    public Project getProjectById(Long id) {
        return projectDao.getProjectById(id);
    }

    public void deleteProject(Long id) {
        projectDao.deleteProject(id);
    }

    public Project updateProject(Long id, Project project) {

        Project oldProject = projectDao.getProjectById(id);

        oldProject.setProjectName(project.getProjectName());
        oldProject.setClientName(project.getClientName());
        oldProject.setLeadBy(project.getLeadBy());
        oldProject.setContactPerson(project.getContactPerson());
        oldProject.setContact(project.getContact());
        oldProject.setStartDate(project.getStartDate());
        oldProject.setModifiedDate(LocalDate.now());
        oldProject.setModifiedBy(null);

        return projectDao.updateProject(oldProject);
    }
}
