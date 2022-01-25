package com.collebra.springjwt.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.collebra.springjwt.models.Customer;
import com.collebra.springjwt.repository.CustomerRepository;

@Service
public class AdminServiceImpl implements AdminService{
	@Autowired
	CustomerRepository customerRepo;

	@Override
	public List<Customer> getAllCustomers() {
		
		return customerRepo.findAll();
	}

	
}
