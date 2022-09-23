package com.nfcs.hcm.dto;

import java.sql.Date;

import javax.persistence.Column;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmployeeDto {
	private long emp_id;
//	private String username;
	private String empNo;
	private String empname;
	private Date dateOfBirth;
	private String gender;
	private String reportingManager;
	private String status;
	private Date dateOfJoining;
	private int probationPeriod;
	private Date confirmationDate;
	private String email;
	private String phoneNumber;
	private String emergencyContactName;
	private String emergencyContactNumber;
	private String fatherName;
//	private String spouseName;
	private String position;
	private String password;
}
