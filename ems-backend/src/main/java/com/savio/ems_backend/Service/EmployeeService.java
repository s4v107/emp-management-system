package com.savio.ems_backend.Service;

import com.savio.ems_backend.DTO.EmployeeDTO;
import org.springframework.stereotype.Service;

import java.util.List;

public interface EmployeeService {
    EmployeeDTO createEmployee(EmployeeDTO employeeDTO);
    EmployeeDTO getEmployeeById(Long employeeId);
    List<EmployeeDTO> getAllEmployees();
    EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO employeeDTO);
    void deleteEmployee(Long employeeId);
}
