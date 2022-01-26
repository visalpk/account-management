package com.collebra.springjwt.models;


import javax.persistence.*;
import javax.validation.constraints.Size;

@Entity
@Table(name = "customers",uniqueConstraints = { 
	      @UniqueConstraint(columnNames = "pan"),
	      @UniqueConstraint(columnNames = "email"),
	      @UniqueConstraint(columnNames = "aadhar")
	    }
	     )
public class Customer {
	
	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	
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
	
	@Size(max = 1)
	private String approval;
	
	
	
	@Size(max = 12)
	private String aadhar;
    public Customer() {}
	public Customer( @Size(max = 4) String title,  @Size(max = 20) String fullname,
			  String email,  @Size(max = 8) String dob,
			 @Size(max = 10) String mobile,  @Size(max = 10) String pan,
			 @Size(max = 12) String aadhar,@Size(max = 1) String approval) {
		super();
		this.title = title;
		this.fullname = fullname;
		this.email = email;
		this.dob = dob;
		this.mobile = mobile;
		this.pan = pan;
		this.aadhar = aadhar;
		this.approval= approval;
	}

	public String getApproval() {
		return approval;
	}
	public void setApproval(String approval) {
		this.approval = approval;
	}
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
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
