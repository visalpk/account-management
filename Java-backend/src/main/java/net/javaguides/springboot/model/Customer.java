package net.javaguides.springboot.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

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
	

	@Column(name = "dob")
	private String dob;
	
	@Column(name = "mobile")
	private long mobile;
	
	@Column(name = "pan")
	private String pan;
	
	@Column(name = "Aadhar")
	private long aadhar;
	
	
	public Customer() {
		
	}
	
	public Customer(String title, String fullName, String emailId, String dob, long mobile, String pan, long aadhar) {
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

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		this.dob = dob;
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
