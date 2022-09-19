package com.nfcs.hcm.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import com.nfcs.hcm.model.Employee;

@Repository
@EnableJpaRepositories
public interface EmployeeRepository extends JpaRepository<Employee, Long> {

	Employee findByEmail(String email);

	Employee findByEmpNo(long empNo);

}
