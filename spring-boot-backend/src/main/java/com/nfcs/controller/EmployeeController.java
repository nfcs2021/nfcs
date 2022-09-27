package com.nfcs.controller;

import java.util.List;

import javax.mail.MessagingException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.thymeleaf.spring4.SpringTemplateEngine;

import com.nfcs.model.Employee;
import com.nfcs.service.EmployeeService;

@Controller
@RequestMapping("/data")
public class EmployeeController {

    @Autowired
	SpringTemplateEngine templateEngine;
	
    @Autowired
	private JavaMailSender sender;

	@Autowired
	private EmployeeService employeeService;

	@PostMapping("/employee")
	public ResponseEntity<Employee> saveEmployeeDetails(@RequestBody Employee emp) throws MessagingException {

		return ResponseEntity.ok(employeeService.saveEmployeeDetails(emp));

	}
	
	@GetMapping("/employee")
	public ResponseEntity<List<Employee>> getEmployeeAllDetails() {
		
		return ResponseEntity.ok(employeeService.getEmployeeAllDetails());
	
	}
	

	@GetMapping("/employee/{id}")
	public ResponseEntity<Employee> getEmployeeDetails(@PathVariable long id) {
		return ResponseEntity.ok(employeeService.getEmployeeDetails(id));
	}
	@GetMapping("/employeeByEmpId/{empId}")
	public ResponseEntity<Employee> getEmployeeByEmpId(@PathVariable String empId) {
		
		return ResponseEntity.ok(employeeService.getEmployeeByEmpId(empId));
	
		
	}
	
	

//	@PostMapping(value="/register-employee",headers=("content-type=multipart/*"))
//	public @ResponseBody void sendMail(@RequestPart String empId,@RequestPart String email) throws Exception {
//		
//   MimeMessage message = sender.createMimeMessage();
//   MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
//		   StandardCharsets.UTF_8.name());
//	Map<String, Object> model = new HashMap<String, Object>();
//	model.put("empId", empId);
//    Context context = new Context();
//	context.setVariables(model);
//	String html = templateEngine.process("email-template", context);
//     try {
//	     helper.setTo(email);
//	     helper.setText(html, true);
//	      helper.setSubject("Please Generate New Password");
//	      }
//     catch (javax.mail.MessagingException e) {
//            e.printStackTrace(); 
//              } 
//     sender.send(message);
//	}
	
}
