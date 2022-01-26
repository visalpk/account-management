package com.collebra.springjwt.repository;



import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.collebra.springjwt.models.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long>{

	Boolean existsByEmail(String email);



}
