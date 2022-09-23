package com.nfcs.hcm.repository;

import java.util.Optional;

import org.springframework.data.repository.CrudRepository;

import com.nfcs.hcm.model.EmployeeDao;

public interface EmployeeRepository extends CrudRepository<EmployeeDao, Long> {
	EmployeeDao findByEmpNo(String empNo);

}