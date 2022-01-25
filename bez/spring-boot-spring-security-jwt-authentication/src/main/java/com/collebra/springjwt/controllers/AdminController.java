package com.collebra.springjwt.controllers;



	import java.util.List;

	import org.springframework.beans.factory.annotation.Autowired;
	import org.springframework.security.access.prepost.PreAuthorize;
	import org.springframework.web.bind.annotation.CrossOrigin;
	import org.springframework.web.bind.annotation.GetMapping;
	import org.springframework.web.bind.annotation.RequestMapping;
	import org.springframework.web.bind.annotation.RestController;

	import com.collebra.springjwt.models.Customer;
	import com.collebra.springjwt.repository.CustomerRepository;
	import com.collebra.springjwt.service.AdminService;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/admin")
@PreAuthorize("hasRole('ADMIN')")
public class AdminController {
	
	
	  @Autowired
	  AdminService adminServ;
	  @GetMapping("/all")
	  public String allAccess() {
	    return "Public Content.";
	  }


	  @GetMapping("/customerlist")
	  public List<Customer> customerlist(){
		 
			return adminServ.getAllCustomers();
		}
	  }
	   



