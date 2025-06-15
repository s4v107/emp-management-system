package com.savio.ems_backend.Repository;

import com.savio.ems_backend.Entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;


public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
