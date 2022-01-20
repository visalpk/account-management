package com.collabera.springboot.service;

import java.util.List;

import org.springframework.security.core.userdetails.UserDetailsService;

import com.collabera.springboot.dto.UserRegistrationDto;
import com.collabera.springboot.model.User;

public interface UserService extends UserDetailsService{
	User save(UserRegistrationDto registrationDto);

	User getUserById(long id);

	void deleteUserById(long id);

	List<User> getAllRestData();
}