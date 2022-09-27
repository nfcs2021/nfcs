package com.nfcs.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nfcs.dto.EmployeeAddressDto;
import com.nfcs.model.EmployeeAddress;
import com.nfcs.service.EmployeeAddressService;

@Controller
@RequestMapping(path = "/address")
public class EmployeeAddressController {

	@Autowired
	private EmployeeAddressService employeeAddressService;

	@PostMapping(path = "/saveAddress")
	public ResponseEntity<EmployeeAddress> insertEmployeeAddress(@RequestBody EmployeeAddressDto employeeAddressDto)
			throws MessagingException {
		EmployeeAddress address = employeeAddressService.saveAddress(employeeAddressDto);
		return new ResponseEntity<EmployeeAddress>(address, HttpStatus.CREATED);
	}

	@GetMapping(path = "/getEmployeeAddress")
	public ResponseEntity<List<EmployeeAddress>> getEmployeeAddressData() {
		List<EmployeeAddress> employeeAddress = employeeAddressService.findAddress();
		return new ResponseEntity<List<EmployeeAddress>>(employeeAddress, HttpStatus.OK);
	}

	@GetMapping(path = "/getEmployeeAddress/{empId}")
	public ResponseEntity<List<EmployeeAddress>> findByProject(@PathVariable String empId) {
		List<EmployeeAddress> employeeDto = employeeAddressService.getAddressByEmpNo(empId);
		return new ResponseEntity(employeeDto, HttpStatus.OK);
	}

}
