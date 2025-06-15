package com.savio.ems_backend.Service.Impl;

import com.savio.ems_backend.DTO.EmployeeDTO;
import com.savio.ems_backend.Entity.Employee;
import com.savio.ems_backend.Exception.ResourceNotFoundException;
import com.savio.ems_backend.Mapper.EmployeeMapper;
import com.savio.ems_backend.Repository.EmployeeRepository;
import com.savio.ems_backend.Service.EmployeeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {
    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public EmployeeDTO createEmployee(EmployeeDTO employeeDTO) {

        Employee employee = EmployeeMapper.mapToEmployee(employeeDTO);
        Employee  savedEmployee = employeeRepository.save(employee);
        return EmployeeMapper.mapToEmployeeDTO(savedEmployee);
    }

    @Override
    public EmployeeDTO getEmployeeById(Long employeeId) {
        Employee foundEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with given id : " + employeeId));

        return EmployeeMapper.mapToEmployeeDTO(foundEmployee);
    }

    @Override
    public List<EmployeeDTO> getAllEmployees() {
        return employeeRepository
                .findAll()
                .stream()
                .map(EmployeeMapper :: mapToEmployeeDTO)
                .collect(Collectors.toList());
    }

    @Override
    public EmployeeDTO updateEmployee(Long employeeId, EmployeeDTO employeeDTO) {

        Employee foundEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with given id : " + employeeId));

        foundEmployee.setId(employeeId);
        foundEmployee.setFirstName(employeeDTO.getFirstName());
        foundEmployee.setLastName(employeeDTO.getLastName());
        foundEmployee.setEmail(employeeDTO.getEmail());

        employeeRepository.save(foundEmployee);
        return EmployeeMapper.mapToEmployeeDTO(foundEmployee);
    }

    @Override
    public void deleteEmployee(Long employeeId) {
        Employee foundEmployee = employeeRepository.findById(employeeId)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with given id : " + employeeId));
        employeeRepository.deleteById(employeeId);
    }


}
