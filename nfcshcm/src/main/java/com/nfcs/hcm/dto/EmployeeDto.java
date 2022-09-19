package com.nfcs.hcm.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeDto {

	private int empId;
	private String empNoSeries;
	private int empNo;
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
}
