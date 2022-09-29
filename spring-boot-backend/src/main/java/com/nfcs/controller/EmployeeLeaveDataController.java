package com.nfcs.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.nfcs.dto.EmployeeLeaveDataDto;
import com.nfcs.dto.LeaveRequestDataDto;
import com.nfcs.model.EmployeeLeaveData;
import com.nfcs.service.EmployeeLeaveDataService;

@RequestMapping("/employee")
@Controller
public class EmployeeLeaveDataController {

	@Autowired
	EmployeeLeaveDataService employeeLeaveDataService;
	
	
	@PostMapping("/leavedata")
	public ResponseEntity<EmployeeLeaveData> saveData(@RequestBody EmployeeLeaveDataDto leaveData) throws MessagingException {
		
		return ResponseEntity.ok(employeeLeaveDataService.saveData(leaveData));
		
	}
	@GetMapping("/leavedata")
	public ResponseEntity<List<EmployeeLeaveData>> getLeaveData() {
		
		return ResponseEntity.ok(employeeLeaveDataService.getLeaveData());
		
	}
	
	@GetMapping("/leavedataEmpId/{empId}")
	public ResponseEntity<List<EmployeeLeaveData>> getLeaveDataByEmpId(@PathVariable String empId) {
		
		return ResponseEntity.ok(employeeLeaveDataService.getLeaveDataByEmpId(empId));
		
	}
	
	@GetMapping("/leavedata/{id}")
	public ResponseEntity<EmployeeLeaveData> getLeaveDataById(@PathVariable long id) {
		
		return ResponseEntity.ok(employeeLeaveDataService.getLeaveDataById(id));
		
	}
	
	@PutMapping("/leavedata")
	public ResponseEntity<EmployeeLeaveData> leaveUpdate(@RequestBody LeaveRequestDataDto leaveDta) {
		
		return ResponseEntity.ok(employeeLeaveDataService.leaveUpdate(leaveDta));
		
	}
	
	@PutMapping("/CancelLeaveRequest/{id}")
	public ResponseEntity<EmployeeLeaveData> CancelLeaveRequest(@PathVariable long id) {
		
		return ResponseEntity.ok(employeeLeaveDataService.CancelLeaveRequest(id));
		
	}
}
