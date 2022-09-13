package com.nfcs.leavemanagement.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.Data;

@Data
@Entity
@Table(name = "user")
public class UserDao {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long user_id;
	@Column
	private String username;
	@Column
	private String dataOfBirth;
	@Column
	private String email;
	@Column
	private String address;
	@Column
	private String phoneNumber;
	@Column
	@JsonIgnore
	private String password;
}
