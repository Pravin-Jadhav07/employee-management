package com.jadhav.employeemanagement.Controller;

import com.jadhav.employeemanagement.Entities.Project;
import com.jadhav.employeemanagement.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.jadhav.employeemanagement.utility.AppConstants.*;

@RestController
@RequestMapping("projects")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {

    @Autowired
    ProjectService projectService;


    @GetMapping
    public ResponseEntity<Map<String,Object>> getAllProjects() {
        Map<String,Object> response = new HashMap<>();
        response.put(RESULT,SUCCESS);
        List<Project> projects;
        try {
            projects= projectService.getAllProjects();
            response.put(DATA,projects);
        }catch (Exception ex){
            response.put(RESULT,FAILED);
        }
        return ResponseEntity.ok(response);
    }

    @PostMapping
    public ResponseEntity<Map<String,Object>> createProject(@RequestBody Project project) {
        Map<String,Object> response = new HashMap<>();
        response.put(RESULT,SUCCESS);
        try {
            Project project1 = projectService.createProject(project);
        }catch (Exception ex){
            response.put(RESULT,FAILED);
        }
        return ResponseEntity.ok(response);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Map<String,Object>> getProjectById(@PathVariable Long id) {
        Map<String,Object> response = new HashMap<>();
        response.put(RESULT,SUCCESS);
        try {
            Project project = projectService.getProjectById(id);
            response.put(DATA,project);
        }catch (Exception ex){
            response.put(RESULT,FAILED);
        }
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String,Object>> updateProject(
            @PathVariable Long id, @RequestBody Project project) {

        Map<String,Object> response = new HashMap<>();
        response.put(RESULT,SUCCESS);
        try {
            Project updateProject = projectService.updateProject(id,project);
        }catch (Exception ex){
            response.put(RESULT,FAILED);
        }
        return ResponseEntity.ok(response);
    }


    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Object>> deleteProject(@PathVariable Long id) {
        Map<String,Object> response = new HashMap<>();
        response.put(RESULT,SUCCESS);
        try {
            projectService.deleteProject(id);
        }catch (Exception ex){
            response.put(RESULT,FAILED);
        }
        return ResponseEntity.ok(response);
    }
}
