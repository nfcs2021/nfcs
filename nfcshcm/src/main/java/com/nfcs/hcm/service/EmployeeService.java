package com.nfcs.hcm.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.model.EmployeeDao;
import com.nfcs.hcm.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

//	public EmployeeDao saveEmployeeDetails(EmployeeDao emp) {
//		// TODO Auto-generated method stub
//		return employeeRepository.save(emp);
//	}
	public EmployeeDto saveEmployeeDetails(EmployeeDto employeeDto) {
		EmployeeDao employeeDao = new EmployeeDao();
		employeeDao.setEmpNo(employeeDto.getEmpNo());
		employeeDao.setEmpname(employeeDto.getEmpname());
		employeeDao.setDateOfBirth(employeeDto.getDateOfBirth());
		employeeDao.setGender(employeeDto.getGender());
		employeeDao.setReportingManager(employeeDto.getReportingManager());
		employeeDao.setStatus(employeeDto.getStatus());
		employeeDao.setDateOfJoining(employeeDto.getDateOfJoining());
		employeeDao.setProbationPeriod(employeeDto.getProbationPeriod());
		employeeDao.setConfirmationDate(employeeDto.getConfirmationDate());
		employeeDao.setEmail(employeeDto.getEmail());
		employeeDao.setPhoneNumber(employeeDto.getPhoneNumber());
		employeeDao.setEmergencyContactName(employeeDto.getEmergencyContactName());
		employeeDao.setEmergencyContactNumber(employeeDto.getEmergencyContactNumber());
		employeeDao.setFatherName(employeeDto.getFatherName());
		employeeDao.setPosition(employeeDto.getPosition());
		employeeDao = employeeRepository.save(employeeDao);
		employeeDto.setEmp_id(employeeDao.getEmpId());
//		employeeDao.setPassword(bcryptEncoder.encode(emplyeeDto.getPassword()));
		return employeeDto;
	}

	public EmployeeDao getEmployeeDetails(long id) {
		// TODO Auto-generated method stub
		return employeeRepository.findById(id).get();
	}
}
