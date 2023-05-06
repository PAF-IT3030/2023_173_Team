package com.medi.medicinebackend.repository;

import com.medi.medicinebackend.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EmployeeRepository extends JpaRepository<Employee,Long> {
}
