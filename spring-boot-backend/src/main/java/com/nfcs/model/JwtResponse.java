package com.nfcs.model;

import java.io.Serializable;

public class JwtResponse implements Serializable {

	private static final long serialVersionUID = -8091879091924046844L;
	private final String jwttoken;
	private final Employee emp;
	public JwtResponse(String jwttoken, Employee emp) {
		this.jwttoken = jwttoken;
		this.emp=emp;
	}

	public String getToken() {
		return this.jwttoken;
	}
	
	public Employee getEmp() {
		return emp;
	}
}