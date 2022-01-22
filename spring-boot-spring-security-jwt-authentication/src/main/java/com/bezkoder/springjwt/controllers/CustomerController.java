package com.bezkoder.springjwt.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bezkoder.springjwt.exception.ResourceNotFoundException;
import com.bezkoder.springjwt.models.Customer;
import com.bezkoder.springjwt.repository.CustomerRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class CustomerController {

	@Autowired
	private CustomerRepository customerRepository;
	
	// get all customers
	@GetMapping("/customers")
	public List<Customer> getAllCustomers(){
		return customerRepository.findAll();
	}		
	
	// create customer rest api
	@PostMapping("/customers")
	public Customer createcustomer(@RequestBody Customer customer) {
	
		return customerRepository.save(customer);
	}
	
	// get customer by id rest api
	@GetMapping("/customers/{id}")
	public ResponseEntity<Customer> getcustomerById(@PathVariable Long id) {
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("customer not exist with id :" + id));
		return ResponseEntity.ok(customer);
	}
	
	// update customer rest api
	
	@PutMapping("/customers/{id}")
	public ResponseEntity<Customer> updatecustomer(@PathVariable Long id, @RequestBody Customer customerDetails){
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("customer not exist with id :" + id));
		
		customer.setFullName(customerDetails.getFullName());
		customer.setTitle(customerDetails.getTitle());
		customer.setEmailId(customerDetails.getEmailId());
		customer.setDob(customerDetails.getDob());
		customer.setMobile(customerDetails.getMobile());
		customer.setPan(customerDetails.getPan());
		customer.setAadhar(customerDetails.getAadhar());
		
		
		Customer updatedCustomer = customerRepository.save(customer);
		return ResponseEntity.ok(updatedCustomer);
	}
	
	// delete customer rest api
	@DeleteMapping("/customers/{id}")
	public ResponseEntity<Map<String, Boolean>> deletecustomer(@PathVariable Long id){
		Customer customer = customerRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id :" + id));
		
		customerRepository.delete(customer);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
