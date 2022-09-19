package com.nfcs.hcm.model;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
public class Employee {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "employee_Id")
	private long empId;
	@Column(name = "emp_no_series")
	private String empNoSeries;
	@Column(name = "empNo")
	private long empNo;
	@Column(name = "emp_name")
	private String empname;
	@Column(name = "Date_of_Birth")
	private LocalDate dateOfBirth;
	@Column(name = "gender")
	private String gender;
	@Column(name = "reporting_manager")
	private String reportingManager;
	@Column(name = "status")
	private String status;
	@Column(name = "date_of_joining")
	private LocalDate dateOfJoining;
	@Column(name = "probation_period")
	private int probationPeriod;
	@Column(name = "confirmation_date")
	private LocalDate confirmationDate;
//	@NotEmpty
//	@Pattern(regexp = "^[a-zA-Z0-9]+[-_]?[a-zA-Z0-9]+\\@[a-zA-Z0-9]+\\.+[a-zA-Z0-9]{2,4}$", message = "Email must be in email formate")
	@Column(name = "email")
	private String email;
	@Column(name = "phone_number")
	private String phoneNumber;
	@Column(name = "emergency_contact_name")
	private String emergencyContactName;
	@Column(name = "emergency_contact_number")
	private String emergencyContactNumber;
	@Column(name = "father_name")
	private String fatherName;
	@Column(name = "spouse_name")
	private String spouseName;
	@Column(name = "division")
	private String division;
	@Column(name = "cost_center")
	private String costCenter;
	@Column(name = "grade")
	private String grade;
	@Column(name = "designation")
	private String designation;
	@Column(name = "location")
	private String location;
	@Column(name = "department")
	private String department;

}
