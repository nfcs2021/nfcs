package com.nfcs.service;

import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.mail.MessagingException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.security.access.event.PublicInvocationEvent;
import org.springframework.stereotype.Service;
import org.thymeleaf.context.Context;
import org.thymeleaf.spring4.SpringTemplateEngine;

import com.nfcs.model.EmployeeLeaveData;
import com.nfcs.model.EmployeeLeaveDataDto;
import com.nfcs.model.LeaveRequestDataDto;
import com.nfcs.repository.EmployeeLeaveDataRepository;

@Service
public class EmployeeLeaveDataService {

	@Autowired
	SpringTemplateEngine templateEngine;

	@Autowired
	private JavaMailSender sender;

	@Autowired
	EmployeeLeaveDataRepository employeeLeaveDataRepository;

	public EmployeeLeaveData saveData(EmployeeLeaveDataDto leaveData) throws MessagingException {
		EmployeeLeaveData employeeLeaveData = new EmployeeLeaveData();
		employeeLeaveData.setLeaveType(leaveData.getLeaveType());
		employeeLeaveData.setDateTo(leaveData.getDateTo());
		employeeLeaveData.setDateFrom(leaveData.getDateFrom());
		employeeLeaveData.setLeaveReason(leaveData.getLeaveReason());
		employeeLeaveData.setStatus("pending");
		employeeLeaveData.setEmpId(leaveData.getEmpId());

		EmployeeLeaveData empLeaveData = employeeLeaveDataRepository.save(employeeLeaveData);
		sendMail(leaveData);
		return empLeaveData;
	}

	public EmployeeLeaveData getData(EmployeeLeaveData leaveData) {

		return employeeLeaveDataRepository.save(leaveData);
	}

	public List<EmployeeLeaveData> getLeaveDataByEmpId(String empId) {
		// TODO Auto-generated method stub
		return employeeLeaveDataRepository.findAllByEmpId(empId);
	}

	private void sendMail(EmployeeLeaveDataDto leaveData) throws MessagingException {

		MimeMessage message = sender.createMimeMessage();
		MimeMessageHelper helper = new MimeMessageHelper(message, MimeMessageHelper.MULTIPART_MODE_MIXED_RELATED,
				StandardCharsets.UTF_8.name());
		Map<String, Object> model = new HashMap<String, Object>();
		model.put("leaveType", leaveData.getLeaveType());
		model.put("toDate", leaveData.getDateTo());
		model.put("fromDate", leaveData.getDateFrom());
		model.put("reason", leaveData.getLeaveReason());
		model.put("empId", leaveData.getEmpId());
		Context context = new Context();
		context.setVariables(model);
		String html = templateEngine.process("leave-template", context);
		try {
			helper.setTo(leaveData.getToMail());
			for (String toAddress : leaveData.getToCc()) {
				helper.addCc(toAddress);
			}
			helper.setText(html, true);
			helper.setSubject("Request for leave");
		} catch (javax.mail.MessagingException e) {
			e.printStackTrace();
		}
		sender.send(message);
	}

	public EmployeeLeaveData getLeaveDataById(long id) {
		// TODO Auto-generated method stub
		return employeeLeaveDataRepository.findById(id).get();
	}

	public EmployeeLeaveData leaveUpdate(LeaveRequestDataDto leaveDta) {
		EmployeeLeaveData newLleaveData = employeeLeaveDataRepository.findById(leaveDta.getLeaveId()).get();

		newLleaveData.setStatus(leaveDta.getStatus());
		newLleaveData.setDescription(leaveDta.getDeniedReason());
		return employeeLeaveDataRepository.save(newLleaveData);
	}

	public List<EmployeeLeaveData> getLeaveData() {
		// TODO Auto-generated method stub
		return employeeLeaveDataRepository.findAll();
	}

}
