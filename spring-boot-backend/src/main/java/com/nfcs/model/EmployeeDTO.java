package com.nfcs.model;

import java.sql.Date;


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
	
	private String email;
	
	private String phoneNumber;

	private String emergencyContactName;
	
	private String emergencyContactNumber;
	
	private String fatherName;
	
	private String spouseName;
	
//	private String division;
//
//	private String grade;
//	
//	private String designation;
//	
//	private String location;
//	
//	private String department;
//	
	private String password;

<<<<<<< HEAD:spring-boot-backend/src/main/java/com/nfcs/model/EmployeeDTO.java
}
=======
}
>>>>>>> 1e07062e0c8fe89cbb56cdaf4a303d10db051526:nfcshcm/src/main/java/com/nfcs/hcm/dto/EmployeeDto.java
