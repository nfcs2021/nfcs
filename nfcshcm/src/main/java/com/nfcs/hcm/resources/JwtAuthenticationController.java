package com.nfcs.hcm.resources;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
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
	private JwtUserDetailsService userDetailsService;

	@RequestMapping(value = "/authenticate", method = RequestMethod.POST)
	public ResponseEntity<?> createLoginToken(@RequestBody JwtRequest jwtRequest) throws Exception {
		authenticate(jwtRequest.getEmpNo(), jwtRequest.getPassword());
		final UserDetails userDetails = userDetailsService.loadUserByUsername(jwtRequest.getEmpNo());
		final String token = jwtTokenUtil.generateToken(userDetails);
		System.out.println(token);
		return ResponseEntity.ok(new JwtResponse(token));
	}

	@RequestMapping(value = "/register", method = RequestMethod.POST)
	public ResponseEntity<?> saveUser(@RequestBody EmployeeDto emplyeeDto) throws Exception {
		return ResponseEntity.ok(userDetailsService.save(emplyeeDto));
	}

	private void authenticate(String username, String password) throws Exception {
		try {
			authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
		} catch (DisabledException e) {
			throw new Exception("USER_DISABLED", e);
		} catch (BadCredentialsException e) {
			throw new Exception("INVALID_CREDENTIALS", e);
		}
	}

	@RequestMapping(value = "/employee", method = RequestMethod.GET)
	public ResponseEntity<?> getEmployees() throws Exception {
		return ResponseEntity.ok(userDetailsService.getEmployees());
	}

//	@RequestMapping(value = "/employee/{empNo}", method = RequestMethod.GET)
//	public ResponseEntity<?> getEmployeeByNo(@RequestParam String empNo) throws Exception {
//		return ResponseEntity.ok(userDetailsService.getByEmpNo(empNo));
//	}

	@RequestMapping(value = "/employee/{empNo}", method = RequestMethod.GET)
	public ResponseEntity<EmployeeDto> findByProject(@PathVariable String empNo) {
		EmployeeDto employeeDto = userDetailsService.getByEmpNo(empNo);
		return new ResponseEntity(employeeDto, HttpStatus.OK);
	}

}