package com.nfcs.hcm.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.model.JwtRequest;
import com.nfcs.hcm.model.JwtResponse;
import com.nfcs.hcm.security.JwtTokenUtil;
import com.nfcs.hcm.service.JwtUserDetailsService;

@RestController
@CrossOrigin
public class JwtAuthenticationController {

	@Autowired
	private AuthenticationManager authenticationManager;

	@Autowired
	private JwtTokenUtil jwtTokenUtil;

	@Autowired
	private JwtUserDetailsService emploDetailsService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createLoginToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		authenticate(jwtRequest.getEmpId(), jwtRequest.getPassword());
		final UserDetails userDetails = emploDetailsService.loadUserByUsername(jwtRequest.getEmpId());
		
		final String token = jwtTokenUtil.generateToken(userDetails);
//		System.out.println(token);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody EmployeeDto user) throws Exception {
		return ResponseEntity.ok(emploDetailsService.save(user));
	}

	private void authenticate(String empNo, String password) throws Exception {
		
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(empNo, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}
}