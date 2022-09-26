package com.nfcs.model;

import java.sql.Blob;
import java.sql.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.nfcs.timestampe.TimeStampe;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@Data
public class EmployeeLeaveData extends TimeStampe{

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	long id;
	@Column
	String leaveType;
	@Column
	Date dateTo;
	@Column
	Date dateFrom;
	@Column
	String leaveReason;
	@Column
	String status;
	@Column
	String description;
	@Column
	Blob attachement;
	@Column
	String empId;
}
