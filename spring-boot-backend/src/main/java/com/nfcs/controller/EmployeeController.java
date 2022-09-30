package com.nfcs.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.thymeleaf.spring4.SpringTemplateEngine;

import com.nfcs.model.Employee;
import com.nfcs.model.EmployeeDTO;
import com.nfcs.service.EmployeeService;

@Controller
@RequestMapping("/data")
public class EmployeeController {

	@Autowired
	SpringTemplateEngine templateEngine;

	@Autowired
	private JavaMailSender sender;

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("/employee")
	public ResponseEntity<Employee> saveEmployeeDetails(@RequestBody Employee emp) throws MessagingException {

		return ResponseEntity.ok(employeeService.saveEmployeeDetails(emp));

	}

	@GetMapping("/employee")
	public ResponseEntity<List<Employee>> getEmployeeAllDetails() {

		return ResponseEntity.ok(employeeService.getEmployeeAllDetails());

	}

	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeDetails(@PathVariable long id) {
		return ResponseEntity.ok(employeeService.getEmployeeDetails(id));
	}

	@GetMapping("/employeeByEmpId/{empId}")
	public ResponseEntity<Employee> getEmployeeByEmpId(@PathVariable String empId) {

		return ResponseEntity.ok(employeeService.getEmployeeByEmpId(empId));
	}

	@PatchMapping("/empDataById/{id}")
	public ResponseEntity<Employee> modifyEmpData(@PathVariable Long id, @RequestBody EmployeeDTO employeeDTO) {
		Employee updateEmployee = employeeService.updateEmpData(id, employeeDTO);
		return new ResponseEntity<Employee>(updateEmployee, HttpStatus.CREATED);
	}

}
