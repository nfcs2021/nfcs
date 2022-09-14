package com.nfcs.hcm.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class UserDto {

	private Long user_id;
	private String username;
	private String dataOfBirth;
	private String email;
	private String address;
	private String phoneNumber;
	private String password;
}
