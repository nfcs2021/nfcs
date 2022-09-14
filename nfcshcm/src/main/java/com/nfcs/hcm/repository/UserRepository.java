package com.nfcs.hcm.repository;

import org.springframework.data.repository.CrudRepository;

import com.nfcs.hcm.model.UserDao;

public interface UserRepository extends CrudRepository<UserDao, Integer> {
	UserDao findByUsername(String username);
	UserDao findByEmail(String email);
}