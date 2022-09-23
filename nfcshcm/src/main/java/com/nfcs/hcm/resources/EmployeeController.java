package com.nfcs.hcm.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.model.EmployeeDao;
import com.nfcs.hcm.service.EmployeeService;

@Controller
@RequestMapping("/data")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("/employee")
	public ResponseEntity<EmployeeDto> saveEmployeeDetails(@RequestBody EmployeeDto emp) {
	EmployeeDto dto	=employeeService.saveEmployeeDetails(emp);
	return new ResponseEntity<EmployeeDto>(dto, HttpStatus.CREATED);
//		return ResponseEntity.ok(employeeService.saveEmployeeDetails(emp));

	}

	@GetMapping("/employee/{id}")
	public ResponseEntity<EmployeeDao> getEmployeeDetails(@PathVariable long id) {
		return ResponseEntity.ok(employeeService.getEmployeeDetails(id));

	}
}
