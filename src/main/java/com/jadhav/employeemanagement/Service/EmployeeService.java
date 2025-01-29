package com.jadhav.employeemanagement.Service;

import com.jadhav.employeemanagement.Dao.EmployeeDao;
import com.jadhav.employeemanagement.Entities.Employee;
import com.jadhav.employeemanagement.Repository.EmployeeRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class EmployeeService {

    @Autowired
    EmployeeDao employeeDao;

    public List<Employee> getAllEmployees(){
        return employeeDao.findAll();
    }

    public void createEmployee(Employee employee) {
        employeeDao.createEmployee(employee);
    }

    public void deleteEmployee(Long id) {
        employeeDao.deleteEmployee(id);
    }

    public Employee getEmployeeById(Long id) {
        return employeeDao.getEmployeeById(id);
    }

    public Employee updateEmployee(Long id, Employee employee) {
        Employee oldEmployee = employeeDao.getEmployeeById(id);
        oldEmployee.setEmployeeName(employee.getEmployeeName());
        oldEmployee.setContactNo(employee.getContactNo());
        oldEmployee.setEmailId(employee.getEmailId());
        oldEmployee.setDeptId(employee.getDeptId());
        oldEmployee.setPassword(employee.getPassword());
        oldEmployee.setGender(employee.getGender());
        oldEmployee.setRole(employee.getRole());
        oldEmployee.setModifiedDate(new Date());

        return employeeDao.updateEmployee(id,oldEmployee);
    }
}
