package com.nfcs.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.nfcs.model.Employee;


@Repository
public interface EmployeeRepository extends CrudRepository<Employee, Long> {
	
	
	Employee findByEmpId(String empId);
	
}