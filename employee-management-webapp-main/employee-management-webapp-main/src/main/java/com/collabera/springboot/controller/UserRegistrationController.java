package com.collabera.springboot.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.collabera.springboot.dto.UserRegistrationDto;
import com.collabera.springboot.model.User;
import com.collabera.springboot.service.UserService;

@RestController
@RequestMapping("/registration")
public class UserRegistrationController {

	private UserService userService;

	public UserRegistrationController(UserService userService) {
		super();
		this.userService = userService;
	}
	
	@ModelAttribute("user")
    public UserRegistrationDto userRegistrationDto() {
        return new UserRegistrationDto();
    }
	
	@GetMapping
	public String showRegistrationForm() {
		return "registration";
	}
	
	@PostMapping
	public String registerUserAccount(@ModelAttribute("user") UserRegistrationDto registrationDto) {
		userService.save(registrationDto);
		return "redirect:/registration?success";
	}
	
	@GetMapping("/showFormForUpdate/{id}")
	public String showFormForUpdate(@PathVariable ( value = "id") long id, Model model) {
		
		// get employee from the service
		User user = userService.getUserById(id);
		
		// set employee as a model attribute to pre-populate the form
		model.addAttribute("user", user);
		return "update_user";
	}
	
	@GetMapping("/deleteUser/{id}")
	public String deleteUser(@PathVariable (value = "id") long id) {
		
		// call delete employee method 
		this.userService.deleteUserById(id);
		return "redirect:/";
	}
	
	@GetMapping("/")
	public ResponseEntity<List<User>> getAllRestdata() {
		List<User> userList = userService.getAllRestData();
		return ResponseEntity.ok(userList);

	}

	@GetMapping("/user/{userid}")
	public ResponseEntity<User> employeeByEmpId(@PathVariable("userid") int userId) {
		User usr = userService.getUserById(userId);
		return ResponseEntity.ok(usr);

	}
	
}