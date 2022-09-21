package com.nfcs.hcm.service;

import java.util.ArrayList;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nfcs.hcm.dto.EmployeeDto;

import com.nfcs.hcm.model.Employee;

import com.nfcs.hcm.repository.EmployeeRepository;



@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	@Override
	public UserDetails loadUserByUsername(String empNo) throws UsernameNotFoundException {
		// TODO Auto-generated method stub
		System.out.println("hii"+empNo);
		Employee EmpData =employeeRepository.findByEmpId(empNo);
		System.out.println("hii");
		System.out.println(EmpData);
		if (EmpData == null) {	
			throw new UsernameNotFoundException("User not found with Email :" + empNo);	}
		
	return new User(EmpData.getEmail(), EmpData.getPassword(), new ArrayList<>());
	}
	


	public Employee save(EmployeeDto emp) {
		Employee newEmployee = new Employee();
		
		newEmployee.setId(emp.getId());
		newEmployee.setEmpId(emp.getEmpId());
		newEmployee.setEmpname(emp.getEmpname());
		newEmployee.setDateOfBirth(emp.getDateOfBirth()); 
		newEmployee.setGender(emp.getGender()); 
		newEmployee.setReportingManager(emp.getReportingManager());
		newEmployee.setStatus(emp.getStatus());  
		newEmployee.setDateOfJoining(emp.getDateOfJoining()); 
		newEmployee.setProbationPeriod(emp.getProbationPeriod());
		newEmployee.setConfirmationDate(emp.getConfirmationDate());  
		newEmployee.setEmail(emp.getEmail());
		newEmployee.setPhoneNumber(emp.getPhoneNumber());
		newEmployee.setEmergencyContactName(emp.getEmergencyContactName());
		newEmployee.setEmergencyContactNumber(emp.getEmergencyContactNumber());
		newEmployee.setFatherName(emp.getFatherName());
		newEmployee.setSpouseName(emp.getSpouseName());
		return employeeRepository.save(newEmployee);
	}


}
