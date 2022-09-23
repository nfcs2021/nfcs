package com.nfcs.hcm.model;

import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "employee")
public class EmployeeDao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "employee_Id")
	private long empId;
//	@Column
//	private String username;
	@Column(name = "employee_number")
	private String empNo;
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
//	@Column(name = "spouse_name")
//	private String spouseName;
	@Column
	private String position;
	@Column
	@JsonIgnore
	private String password;

}
