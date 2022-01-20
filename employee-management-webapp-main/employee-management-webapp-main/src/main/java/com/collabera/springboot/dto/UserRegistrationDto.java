package com.collabera.springboot.dto;

public class UserRegistrationDto {

	private String userId;
	private String password;
	
	public UserRegistrationDto(){
		
	}
	
	public UserRegistrationDto(String userId, String password) {
		super();
		this.userId = userId;
		this.password = password;
	}
	
	public String getUserId() {
		return userId;
	}

	public void setUserId(String userId) {
		this.userId = userId;
	}

	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
}