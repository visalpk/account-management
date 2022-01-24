package com.collebra.springjwt.payload.request;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.validation.constraints.Size;
public class BanksignupRequest {
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long appid;
	
	
	@Size(max = 4)
	private String title;
	
	@Size(max = 20)
	private String fullname;
	
	
	@Size(max = 20)
	private String email;
	
	
	@Size(max = 8)
	private String dob;
	
	
	@Size(max = 10)
	private	String mobile;
	
	
	@Size(max = 10)
	private String pan;
	
	
	@Size(max = 12)
	private String aadhar;

	public Long getAppid() {
		return appid;
	}

	public void setAppid(Long appid) {
		this.appid = appid;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFullname() {
		return fullname;
	}

	public void setFullname(String fullname) {
		this.fullname = fullname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
	}

	public String getMobile() {
		return mobile;
	}

	public void setMobile(String mobile) {
		this.mobile = mobile;
	}

	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public String getAadhar() {
		return aadhar;
	}

	public void setAadhar(String aadhar) {
		this.aadhar = aadhar;
	}

	

}
