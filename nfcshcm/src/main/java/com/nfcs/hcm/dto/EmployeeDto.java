package com.nfcs.hcm.dto;

import java.time.LocalDate;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeDto {

	private long id;
	private String empId;
	private String empname;
	private LocalDate dateOfBirth;
	private String gender;
	private String reportingManager;
	private String status;
	private LocalDate dateOfJoining;
	private int probationPeriod;
	private LocalDate confirmationDate;
	private String email;
	private String phoneNumber;
	private String emergencyContactName;
	private String emergencyContactNumber;
	private String fatherName;
	private String spouseName;
	private String division;
	private String costCenter;
	private String grade;
	private String designation;
	private String location;
	private String department;
	private String password;
}
