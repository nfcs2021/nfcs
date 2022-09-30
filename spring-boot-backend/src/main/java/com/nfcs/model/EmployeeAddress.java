package com.nfcs.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table
public class EmployeeAddress {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long addr_id;
	@Column
	private String address_type;
	@Column
	private String name;
	@Column
	private String address_line1;
	@Column
	private String address_line2;
	@Column
	private String address_line3;
	@Column
	private String email;
	@Column
	private String phone1;
	@Column
	private String phone2;
	@Column
	private String mobile;
	@Column
	private String extension;
	@Column
	private String fax;
	@Column
	private String empId;
	@Column
	private String city;
	@Column
	private String state;
	@Column
	private String country;
	@Column
	private String pin;
//	@ManyToOne(fetch = FetchType.EAGER)
//	private Employee employee;
}
