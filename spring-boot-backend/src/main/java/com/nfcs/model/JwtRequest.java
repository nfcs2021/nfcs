package com.nfcs.model;

import java.io.Serializable;

public class JwtRequest implements Serializable {

	private static final long serialVersionUID = 5926468583005150707L;
	
	private String empId;
	private String password;
	
	//need default constructor for JSON Parsing
	public JwtRequest()
	{
		
	}

	public JwtRequest(String empId, String password) {
		this.setEmpId(empId);
		this.setPassword(password);
	}

	public String getEmpId() {
		return this.empId;
	}

	public void setEmpId(String username) {
		this.empId = username;
	}

	public String getPassword() {
		return this.password;
	}

	public void setPassword(String password) {
		this.password = password;
	}
}