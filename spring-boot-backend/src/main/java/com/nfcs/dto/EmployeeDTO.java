package com.nfcs.dto;

import java.sql.Date;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeDTO {

	private String empId;

	private String empname;

	private Date dateOfBirth;

	private String gender;

	private String reportingManager;

	private String status;

	private Date dateOfJoining;

	private int probationPeriod;

	private Date confirmationDate;

	private int noticePeriod;

	private String currentCompanyExperience;

	private String previousExperience;

	private String totalExperience;

	private String email;

	private String phoneNumber;

	private String emergencyContactName;

	private String emergencyContactNumber;

	private String fatherName;

	private String position;

	private String nickName;

	private String bloodGroup;

	private String martialStatus;

	private Date marriageDate;

	private String spouseName;

	private String nationality;

	private String residential_status;

	private String placeOfBirth;

	private String countryOfOrigin;

	private String religion;

	private String internationalEmployee;

	private String physicallyChallenged;

	private String isDirector;

	private String personalEmail;

	private String grade;

	private String designation;

	private String location;

	private String department;

	private String aadharNo;

	private Date fromDate;

	private Date toDate;

	private String institute;

	private String qualificationArea;

	private String remarks;

	private String password;

}