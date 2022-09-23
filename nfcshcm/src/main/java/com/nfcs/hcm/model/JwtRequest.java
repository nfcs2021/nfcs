package com.nfcs.hcm.model;

import java.io.Serializable;

public class JwtRequest implements Serializable {

	private static final long serialVersionUID = 5926468583005150707L;

	private String empNo;
	private String password;

	// default constructor for JSON Parsing
	public JwtRequest() {
	}

	public JwtRequest(String empNo, String password) {
		this.setEmpNo(empNo);
		this.setPassword(password);
	}

	public String getEmpNo() {
		return empNo;
	}

	public void setEmpNo(String empNo) {
		this.empNo = empNo;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}