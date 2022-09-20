package com.nfcs.hcm.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.dto.UserDto;
import com.nfcs.hcm.model.Employee;
import com.nfcs.hcm.model.UserDao;
import com.nfcs.hcm.repository.EmployeeRepository;
import com.nfcs.hcm.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepository userDao;
	@Autowired
	private EmployeeRepository employeeRepository;
	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserDao user = userDao.findByEmail(email);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with Email :" + email);
		}
		return new User(user.getEmail(), user.getPassword(), new ArrayList<>());
	}

	public UserDao save(UserDto user) {
		UserDao newUser = new UserDao();
		newUser.setUsername(user.getUsername());
		newUser.setDataOfBirth(user.getDataOfBirth());
		newUser.setEmail(user.getEmail());
		newUser.setAddress(user.getAddress());
		newUser.setPhoneNumber(user.getPhoneNumber());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}

	public Employee save(EmployeeDto employeeDto) {
		Employee employee = new Employee();
		employee.setEmpNoSeries(employeeDto.getEmpNoSeries());
		employee.setEmpname(employeeDto.getEmpname());
		employee.setEmpNo(employeeDto.getEmpNo());
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
		return employee;
	}

}
