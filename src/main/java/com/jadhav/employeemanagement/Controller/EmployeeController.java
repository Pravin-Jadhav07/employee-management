package com.jadhav.employeemanagement.Controller;

import com.jadhav.employeemanagement.Entities.Employee;
import com.jadhav.employeemanagement.Entities.Project;
import com.jadhav.employeemanagement.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static com.jadhav.employeemanagement.utility.AppConstants.*;

@RestController
@RequestMapping("employee")
@CrossOrigin(origins = "http://localhost:4200")
public class EmployeeController {


    @Autowired
    EmployeeService employeeService;



    @GetMapping("/")
    public ResponseEntity<Map<String,Object>> getEmployees(){
        Map<String,Object> response = new HashMap<>();
        List<Employee> employees = new ArrayList<>();
        try{
            employees = employeeService.getAllEmployees();
            response.put(RESULT, SUCCESS);
        }catch (Exception e){
            response.put(RESULT, FAILED);
        }
        response.put(DATA,employees);
        return  new ResponseEntity<>(response, HttpStatus.OK);
    }

    @PostMapping("/")
    public ResponseEntity<Map<String,Object>> createEmployee(@RequestBody Employee employee){

        Map<String,Object> response = new HashMap<>();
        try {
            employeeService.createEmployee(employee);
            response.put(RESULT, SUCCESS);
            return new ResponseEntity<>(response, HttpStatus.CREATED);
        }catch (Exception e){
            response.put(RESULT, FAILED);
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String,Object>>  deleteEmployee(@PathVariable Long id){

        Map<String,Object> response = new HashMap<>();
        try {
            employeeService.deleteEmployee(id);
            response.put(RESULT, SUCCESS);
        }catch (Exception ex){
            response.put(RESULT, FAILED);
        }
        return new ResponseEntity<>(response,HttpStatus.OK);
    }


    @GetMapping("/{id}")
    public ResponseEntity<Map<String,Object>> getEmployeeById(@PathVariable Long id) {
        Map<String,Object> response = new HashMap<>();
        response.put(RESULT,SUCCESS);
        try {
            Employee employee = employeeService.getEmployeeById(id);
            response.put(DATA,employee);
        }catch (Exception ex){
            response.put(RESULT,FAILED);
        }
        return ResponseEntity.ok(response);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Map<String,Object>> updateEmployee(
            @PathVariable Long id, @RequestBody Employee employee) {

        Map<String,Object> response = new HashMap<>();
        response.put(RESULT,SUCCESS);
        try {
            Employee updateEmployee = employeeService.updateEmployee(id,employee);
        }catch (Exception ex){
            response.put(RESULT,FAILED);
        }
        return ResponseEntity.ok(response);
    }

/*    write some more controller*/


}
