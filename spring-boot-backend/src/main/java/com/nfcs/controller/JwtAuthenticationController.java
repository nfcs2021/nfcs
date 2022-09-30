package com.nfcs.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;

import com.nfcs.dto.EmployeeDTO;
import com.nfcs.model.Employee;
import com.nfcs.model.JwtRequest;
import com.nfcs.model.JwtResponse;
import com.nfcs.security.JwtTokenUtil;
import com.nfcs.service.EmployeeService;
import com.nfcs.service.JwtEmployeeDetailsService;

import groovyjarjarantlr4.v4.parse.ANTLRParser.sync_return;


@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtEmployeeDetailsService employeeDetailsService;
	
	@Autowired
	private EmployeeService employeeService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {

		authenticate(authenticationRequest.getEmpId(), authenticationRequest.getPassword());

		final UserDetails userDetails = employeeDetailsService
				.loadUserByUsername(authenticationRequest.getEmpId());

		final String token = jwtTokenUtil.generateToken(userDetails);
         Employee empDetails = employeeDetailsService.getByEmpId(authenticationRequest.getEmpId());
		return ResponseEntity.ok(new JwtResponse(token,empDetails));
	}
	
	@RequestMapping(value = "/password-generate", method = RequestMethod.POST)
	public ResponseEntity<Employee> generateEmployeePassword(@RequestBody Employee emp) {	
		System.out.println(emp.getEmpId()+emp.getPassword());
		return ResponseEntity.ok(employeeService.generateEmployeePassword(emp.getEmpId(),emp.getPassword()));
	}
	
	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveEmployee(@RequestBody EmployeeDTO emp) throws Exception {
		return ResponseEntity.ok(employeeDetailsService.save(emp));
	}

	private void authenticate(String empNo, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(empNo, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
	
	@RequestMapping(value = "/employee",method = RequestMethod.GET)
	public ResponseEntity<?> getEmployees() throws Exception {
		return ResponseEntity.ok(employeeDetailsService.getEmployees());
	}
	
	
}