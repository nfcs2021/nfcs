package com.nfcs.hcm.resources;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.model.Employee;
import com.nfcs.hcm.repository.EmployeeRepository;
import com.nfcs.hcm.service.EmployeeService;

@RestController
@RequestMapping(path = "/employee")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@Autowired
	EmployeeRepository employeeRepository;

	@PostMapping(path = "/saveEmployee")
	public ResponseEntity<EmployeeDto> saveEmployee(@RequestBody EmployeeDto employeeDto) {
		EmployeeDto dto = employeeService.insertEmployeeData(employeeDto);
		return new ResponseEntity<EmployeeDto>(dto, HttpStatus.CREATED);
	}

	@GetMapping(path = "/getEmployees")
	public ResponseEntity<List<EmployeeDto>> getAllEmployeeData() {
		List<EmployeeDto> employeeDtos = employeeService.getAllEmpoyees();
		return new ResponseEntity<List<EmployeeDto>>(employeeDtos, HttpStatus.OK);
	}

	@GetMapping(path = "email/{email}")
	public ResponseEntity<EmployeeDto> findEmpByEmail(@PathVariable String email) {
		EmployeeDto employeeDto = employeeService.findEmployeeByEmail(email);
		return new ResponseEntity<EmployeeDto>(employeeDto, HttpStatus.OK);
	}

	@GetMapping(path = "/{empNo}")
	public ResponseEntity<EmployeeDto> findEmpByEmpNo(@PathVariable long empNo) {
		EmployeeDto dto = employeeService.findEmpByNo(empNo);
		return new ResponseEntity<EmployeeDto>(dto, HttpStatus.OK);
	}
//	@GetMapping(path = "/{id}")
//	public ResponseEntity<Optional<EmployeeDto>> findEmpById(@PathVariable long id) {
//		Optional<EmployeeDto> dto = employeeService.employeeFindById(id);
//		return new ResponseEntity<Optional<EmployeeDto>>(dto, HttpStatus.OK);
//	}
}
