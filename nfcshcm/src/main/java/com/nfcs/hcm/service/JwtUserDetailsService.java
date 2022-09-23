package com.nfcs.hcm.service;

import java.time.LocalDate;
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
import com.nfcs.hcm.model.EmployeeDao;
import com.nfcs.hcm.repository.EmployeeRepository;
import com.nfcs.hcm.utility.CommonUtility;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private EmployeeRepository employeeRepository;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String empNo) throws UsernameNotFoundException {
		EmployeeDao employeeDao = employeeRepository.findByEmpNo(empNo);
		if (employeeDao == null) {
			throw new UsernameNotFoundException("User not found with Email :" + empNo);
		}
		return new User(employeeDao.getEmpNo(), employeeDao.getPassword(), new ArrayList<>());
	}

	public EmployeeDao save(EmployeeDto user) {
		EmployeeDao newUser = new EmployeeDao();
		newUser.setEmpNo(user.getEmpNo());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return employeeRepository.save(newUser);
	}

	public List<EmployeeDao> getEmployees() {
		List<EmployeeDao> empDto = (List<EmployeeDao>) employeeRepository.findAll();
		return empDto;
	}

//	public EmployeeDao getByEmpNo(String empNo) {
//		return employeeRepository.findByEmpNo(empNo);
//	}
	public EmployeeDto getByEmpNo(String empNo) {
		// TODO Auto-generated method stub
		return CommonUtility.getUsers(employeeRepository.findByEmpNo(empNo));
	}

}
