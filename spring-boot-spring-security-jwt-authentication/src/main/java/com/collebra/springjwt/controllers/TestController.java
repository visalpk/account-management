package com.collebra.springjwt.controllers;



import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;/*
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;*/
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.collebra.springjwt.models.Customer;
import com.collebra.springjwt.repository.CustomerRepository;


/*import com.collebra.springjwt.service.CustomerService;
*/
@CrossOrigin(origins = "http://localhost:8081")
@RestController
@RequestMapping(value="/api/test")
public class TestController {
	
  private static final Logger logger= LoggerFactory.getLogger(TestController.class);
  @Autowired
  CustomerRepository customerRepository;
  
  @GetMapping("/all")
  public String allAccess() {
    return "Public Content.";
  }

  @GetMapping("/user")
  @PreAuthorize("hasRole('USER') or hasRole('MODERATOR') or hasRole('ADMIN')")
  public String userAccess() {
    return "User Content.";
  }

  @GetMapping("/mod")
  @PreAuthorize("hasRole('MODERATOR')")
  public String moderatorAccess() {
    return "Moderator Board.";
  }

  @GetMapping("/admin")
  @PreAuthorize("hasRole('ADMIN')")
  public List<Customer> listofcust(){
	 
		return customerRepository.findAll();
	}
	
  @GetMapping("/admin/customers/{id}")
  @PreAuthorize("hasRole('ADMIN')")
  public Customer getCustomerById(@PathVariable Long id) throws Exception {
	  
		
			return customerRepository.findById(id).get();
		
	}
 	
  @PutMapping("/admin/customers")
  @PreAuthorize("hasRole('ADMIN')")
  public Customer updateCustomer(@RequestBody Customer customer) {
		return customerRepository.save(customer);
	}
	 
  }