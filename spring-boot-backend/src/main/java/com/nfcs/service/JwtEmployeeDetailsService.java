package com.nfcs.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nfcs.model.Employee;
import com.nfcs.model.EmployeeDTO;
import com.nfcs.repository.EmployeeRepository;



@Service
public class JwtEmployeeDetailsService implements UserDetailsService {
	
	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String empId) throws UsernameNotFoundException {
		Employee emp = employeeRepository.findByEmpId(empId);
		if (emp == null) {
			throw new UsernameNotFoundException("User not found with username: " + empId);
		}
		return new org.springframework.security.core.userdetails.User(emp.getEmpId(), emp.getPassword(),
				new ArrayList<>());
	}
	
	public Employee save(EmployeeDTO user) {
		Employee newUser = new Employee();
		newUser.setEmpId(user.getEmpId());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return employeeRepository.save(newUser);
	}

	public List<Employee> getEmployees() {
		
		List<Employee> empDto =(List<Employee>) employeeRepository.findAll();
		
		return empDto;
		
	}

	public Employee getByEmpId(String empId) {
		
		return employeeRepository.findByEmpId(empId);
	}
}