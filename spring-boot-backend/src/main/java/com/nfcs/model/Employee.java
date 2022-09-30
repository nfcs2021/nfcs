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

	@Column(name = "notice_period")
	private int noticePeriod;

	@Column(name = "current_Company_Experience")
	private String currentCompanyExperience;

	@Column(name = "previous_experience")
	private String previousExperience;

	@Column(name = "total_experience")
	private String totalExperience;

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

	@Column(name = "position")
	private String position;

	@Column(name = "nick_name")
	private String nickName;

	@Column(name = "blood_group")
	private String bloodGroup;

	@Column(name = "martial_status")
	private String martialStatus;

	@Column(name = "marriage_date")
	private Date marriageDate;

	@Column(name = "spouse_name")
	private String spouseName;

	@Column(name = "nationality")
	private String nationality;

	@Column(name = "residentialstatus")
	private String residential_status;

	@Column(name = "place_of_birth")
	private String placeOfBirth;

	@Column(name = "country_of_origin")
	private String countryOfOrigin;

	@Column(name = "religion")
	private String religion;

	@Column(name = "international_employee")
	private String internationalEmployee;

	@Column(name = "physically_challenged")
	private String physicallyChallenged;

	@Column(name = "is_director")
	private String isDirector;

	@Column(name = "personal_email")
	private String personalEmail;

	@Column(name = "grade")
	private String grade;

	@Column(name = "designation")
	private String designation;

	@Column(name = "location")
	private String location;

	@Column(name = "department")
	private String department;

	@Column(name = "aadhar_no")
	private String aadharNo;

	@Column(name = "from_date")
	private Date fromDate;

	@Column(name = "to_date")
	private Date toDate;

	@Column(name = "institute")
	private String institute;

	@Column(name = "qualification_area")
	private String qualificationArea;

	@Column(name = "remarks")
	private String remarks;

	@Column
	private String password;

}