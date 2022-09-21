package com.nfcs.hcm.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.model.Employee;
import com.nfcs.hcm.repository.EmployeeRepository;
import com.nfcs.hcm.utility.CommonUtility;

@Service
public class EmployeeService {

	@Autowired
	private EmployeeRepository employeeRepository;

	public EmployeeDto insertEmployeeData(EmployeeDto employeeDto) {
		Employee employee = new Employee();
		employee.setEmpname(employeeDto.getEmpname());
		employee.setEmpId(employeeDto.getEmpId());
		employee.setDateOfBirth(employee.getDateOfBirth());
		employee.setGender(employeeDto.getGender());
		employee.setReportingManager(employeeDto.getReportingManager());
		employee.setStatus(employeeDto.getStatus());
		employee.setDateOfJoining(employeeDto.getDateOfJoining());
		employee.setProbationPeriod(employeeDto.getProbationPeriod());
		employee.setConfirmationDate(employeeDto.getConfirmationDate());
		employee.setEmail(employeeDto.getEmail());
		employee.setPhoneNumber(employeeDto.getPhoneNumber());
		employee.setEmergencyContactName(employeeDto.getEmergencyContactName());
		employee.setEmergencyContactNumber(employeeDto.getEmergencyContactNumber());
		employee.setFatherName(employeeDto.getFatherName());
		employee.setSpouseName(employeeDto.getSpouseName());
		employee.setDivision(employeeDto.getDivision());
		employee.setCostCenter(employeeDto.getCostCenter());
		employee.setGrade(employeeDto.getGrade());
		employee.setDesignation(employeeDto.getDesignation());
		employee.setLocation(employeeDto.getLocation());
		employee.setDepartment(employeeDto.getDepartment());
		employee = employeeRepository.save(employee);
		employeeDto.setEmpId(employee.getEmpId());
		return employeeDto;
	}

	public List<Employee> getAllEmpoyees() {
		List<Employee> employees = employeeRepository.findAll();
		return employees;
	}

	public Employee findEmployeeByEmail(String email) {
		Employee employeeDto =employeeRepository.findByEmail(email);
		return employeeDto;
	}

	public Employee findEmpByNo(String empNo) {
		Employee dto=employeeRepository.findByEmpId(empNo);
		return dto;
	}

//	public Optional<EmployeeDto> employeeFindById(long id) {
//		// TODO Auto-generated method stub
//		Employee employee = CommonUtility.getEmployeeDtos(employeeRepository.findById(id));
//		return null;
//	}

}