package com.nfcs.leavemanagement.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.nfcs.leavemanagement.dto.UserDto;
import com.nfcs.leavemanagement.model.UserDao;
import com.nfcs.leavemanagement.repository.UserRepository;

@Service
public class JwtUserDetailsService implements UserDetailsService {
	@Autowired
	private UserRepository userDao;

	@Autowired
	private PasswordEncoder bcryptEncoder;

	@Override
	public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
		UserDao user = userDao.findByEmail(email);
		if (user == null) {
			throw new UsernameNotFoundException("User not found with Email :" + email);
		}
		return new User(user.getEmail(), user.getPassword(), new ArrayList<>());
	}

	public UserDao save(UserDto user) {
		UserDao newUser = new UserDao();
		newUser.setUsername(user.getUsername());
		newUser.setDataOfBirth(user.getDataOfBirth());
		newUser.setEmail(user.getEmail());
		newUser.setAddress(user.getAddress());
		newUser.setPhoneNumber(user.getPhoneNumber());
		newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
		return userDao.save(newUser);
	}

}
