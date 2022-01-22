package com.bezkoder.springjwt.models;

import java.sql.Date;

import javax.persistence.*;

import org.springframework.format.annotation.DateTimeFormat;

@Entity
@Table(name = "customers")
public class Customer {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long appid;
	
	@Column(name = "title")//column name always small
	private String title;

	@Column(name = "full_name")
	private String fullName;
	
	@Column(name = "email_id")
	private String emailId;
	
	@DateTimeFormat(pattern = "dd/MM/yyyy")
	@Column(name = "dob")
	private Date dob;
	
	@Column(name = "mobile")
	private long mobile;
	
	@Column(name = "pan")
	private String pan;
	
	@Column(name = "aadhar")
	private long aadhar;



	public Customer() {
		
	}
	
	public Customer(String title, String fullName, String emailId, Date dob, long mobile, String pan, long aadhar) {
		super();
		this.title = title;
		this.fullName = fullName;
		this.emailId = emailId;		
		this.dob = dob;
		this.mobile = mobile;
		this.pan = pan;
		this.aadhar = aadhar;
		
		
	}

	public long getAppid() {
		return appid;
	}

	public void setAppid(long appid) {
		this.appid = appid;
	}

	public Date getDob() {
		return dob;
	}

	public void setDob(Date dob) {
		this.dob = dob;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getFullName() {
		return fullName;
	}

	public void setFullName(String fullName) {
		this.fullName = fullName;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}


	public long getMobile() {
		return mobile;
	}

	public void setMobile(long mobile) {
		this.mobile = mobile;
	}

	
	public String getPan() {
		return pan;
	}

	public void setPan(String pan) {
		this.pan = pan;
	}

	public long getAadhar() {
		return aadhar;
	}

	public void setAadhar(long aadhar) {
		this.aadhar = aadhar;
	}

	
	
}
