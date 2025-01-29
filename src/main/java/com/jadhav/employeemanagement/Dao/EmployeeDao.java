package com.jadhav.employeemanagement.Dao;

import com.jadhav.employeemanagement.Entities.Employee;
import com.jadhav.employeemanagement.Repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class EmployeeDao {

    @Autowired
    EmployeeRepo employeeRepo;

    public List<Employee> findAll() {
        return  employeeRepo.findAll();
    }

    public void createEmployee(Employee employee) {
        employeeRepo.save(employee);
    }

    public void deleteEmployee(Long id) {
        employeeRepo.deleteById(id);
    }

    public Employee getEmployeeById(Long id) {
        return employeeRepo.findById(id).orElseThrow();
    }

    public Employee updateEmployee(Long id, Employee employee) {
        return employeeRepo.save(employee);
    }
}
