package com.nfcs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nfcs.model.EmployeeLeaveData;
import com.nfcs.model.EmployeeLeaveDataDto;

@Repository
public interface EmployeeLeaveDataRepository extends JpaRepository<EmployeeLeaveData, Long> {

	List<EmployeeLeaveData> findAllByEmpId(String empId);

}
