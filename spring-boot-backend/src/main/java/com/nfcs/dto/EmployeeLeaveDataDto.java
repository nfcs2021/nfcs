package com.nfcs.dto;

import java.sql.Blob;
import java.sql.Date;
import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class EmployeeLeaveDataDto {
	
	long id;
	String leaveType;
	Date dateTo;
	Date dateFrom;
	String leaveReason;
	String status;
	String description;
	Blob attachement;
	String empId;
	long leaveCount;
	String toMail;
    List<String> toCc;
	
}
