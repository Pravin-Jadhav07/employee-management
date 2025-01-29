package com.jadhav.employeemanagement.Dao;

import com.jadhav.employeemanagement.Entities.Project;
import com.jadhav.employeemanagement.Repository.ProjectRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ProjectDao {

    @Autowired
    ProjectRepo projectRepo;

    public List<Project> getAllProjects() {
        return projectRepo.findAll();
    }

    public Project createProject(Project project) {
        return projectRepo.save(project);
    }

    public Project getProjectById(Long id) {
        return projectRepo.findById(id).orElseThrow();
    }

    public void deleteProject(Long id) {
        projectRepo.deleteById(id);
    }

    public Project updateProject(Project project) {
        return projectRepo.save(project);
    }
}
