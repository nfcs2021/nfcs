package com.nfcs.dto;

import javax.persistence.Column;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class EmployeeAddressDto {

	private Long addr_id;
	private String address_type;
	private String name;
	private String address_line1;
	private String address_line2;
	private String address_line3;
	private String email;
	private String phone1;
	private String phone2;
	private String mobile;
	private String extension;
	private String fax;
	private String empId;
	private String city;
	private String state;
	private String country;
	private String pin;
}
