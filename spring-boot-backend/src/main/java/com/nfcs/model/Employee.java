package com.nfcs.model;

import java.sql.Date;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "employee")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@Column
	private String empId;

	@Column(name = "emp_name")
	private String empname;

	@Column(name = "Date_of_Birth")
	private Date dateOfBirth;

	@Column(name = "gender")
	private String gender;

	@Column(name = "reporting_manager")
	private String reportingManager;

	@Column(name = "status")
	private String status;

	@Column(name = "date_of_joining")
	private Date dateOfJoining;

	@Column(name = "probation_period")
	private int probationPeriod;

	@Column(name = "confirmation_date")
	private Date confirmationDate;

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

	@Column
	private String position;

//	@Column(name = "spouse_name")
//	private String spouseName;
//	
//	@Column(name = "division")
//	private String division;
//	
//	@Column(name = "grade")
//	private String grade;
//	
//	@Column(name = "designation")
//	private String designation;
//	
//	@Column(name = "location")
//	private String location;
//	
//	@Column(name = "department")
//	private String department;
	@Column
	private String password;

//	@OneToMany(cascade = CascadeType.ALL, fetch = FetchType.EAGER)
//	@JoinColumn(name = "emp_id", referencedColumnName = "empId")
//	private List<EmployeeAddress> employeeAddresses;

}