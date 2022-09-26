package com.nfcs.service;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import com.nfcs.model.Employee;
import com.nfcs.repository.EmployeeRepository;

@Service
public class EmployeeService {

	@Autowired
	SpringTemplateEngine templateEngine;
	
    @Autowired
	private JavaMailSender sender;
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	@Autowired
	private PasswordEncoder bcryptEncoder;
	
	public Employee saveEmployeeDetails(Employee emp) throws MessagingException {
		// TODO Auto-generated method stub
		Employee empData= employeeRepository.save(emp);
		if(empData!=null) {
		
			sendMail(empData);
		}
		 return empData ;
	}

	private void sendMail(Employee emp) throws MessagingException {
		
		MimeMessage message = sender.createMimeMessage();
		   MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
				   StandardCharsets.UTF_8.name());
			Map<String, Object> model = new HashMap<String, Object>();
			model.put("empId", emp.getEmpId());
			model.put("empName", emp.getEmpname());
		    Context context = new Context();
			context.setVariables(model);
			String html = templateEngine.process("email-template", context);
		     try {
			     helper.setTo(emp.getEmail());
			     helper.setText(html, true);
			      helper.setSubject("Please Generate New Password");
			      }
		     catch (javax.mail.MessagingException e) {
		            e.printStackTrace(); 
		              } 
		     sender.send(message);
			}
	

	

	public Employee getEmployeeDetails(long id) {
		// TODO Auto-generated method stub
		return employeeRepository.findById(id).get();
	}

	public Employee generateEmployeePassword(String empId, String password) {

		Employee newUser = employeeRepository.findByEmpId(empId);
		newUser.setEmpId(empId);
		newUser.setPassword(bcryptEncoder.encode(password));
		return employeeRepository.save(newUser);
	}

	public Employee getEmployeeByEmpId(String empId) {
		
		return employeeRepository.findByEmpId(empId);
	}

	public List<Employee> getEmployeeAllDetails() {
		// TODO Auto-generated method stub
		return (List<Employee>) employeeRepository.findAll();
	}

}
