package com.nfcs.service;

import java.nio.charset.StandardCharsets;
import java.sql.Date;
import java.text.SimpleDateFormat;
import java.time.DayOfWeek;
import java.time.temporal.TemporalAdjuster;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.EnumSet;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;
import java.util.Map;
import java.util.Set;

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
import com.nfcs.model.HolidaysCalender;
import com.nfcs.model.LeaveRequestDataDto;
import com.nfcs.repository.EmployeeLeaveDataRepository;
import com.nfcs.repository.HolidaysCalenderRepository;

@Service
public class EmployeeLeaveDataService {

	@Autowired
	SpringTemplateEngine templateEngine;
	
    @Autowired
	private JavaMailSender sender;
	
	
	@Autowired
	EmployeeLeaveDataRepository employeeLeaveDataRepository;
	
	@Autowired
	HolidaysCalenderService holidaysCalenderService;
	
	public EmployeeLeaveData saveData(EmployeeLeaveDataDto leaveData) throws MessagingException {
		
		 List<HolidaysCalender> holidaysData = holidaysCalenderService.getHolidaysList();
		 
		long leaveCount=getLeaveDaysBetweenTwoDates(leaveData.getDateFrom(),leaveData.getDateTo(),holidaysData);
		
		EmployeeLeaveData  employeeLeaveData =new EmployeeLeaveData();
		employeeLeaveData.setLeaveType(leaveData.getLeaveType());
		employeeLeaveData.setDateTo(leaveData.getDateTo());
		employeeLeaveData.setDateFrom(leaveData.getDateFrom());
		employeeLeaveData.setLeaveReason(leaveData.getLeaveReason());
		employeeLeaveData.setStatus("pending");
		employeeLeaveData.setLeaveCount(leaveCount);
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
	return  employeeLeaveDataRepository.findAllByEmpId(empId);
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
		     for(String toAddress : leaveData.getToCc()){
		    	 helper.addCc(toAddress);
		     }
		     helper.setText(html, true);
		      helper.setSubject("Request for leave");
		      }
	     catch (javax.mail.MessagingException e) {
	            e.printStackTrace(); 
	              } 
	     sender.send(message);
		}


public EmployeeLeaveData getLeaveDataById(long id) {
	// TODO Auto-generated method stub
	return employeeLeaveDataRepository.findById(id).get();
}




public EmployeeLeaveData leaveUpdate(LeaveRequestDataDto leaveDta) {
	EmployeeLeaveData newLleaveData=employeeLeaveDataRepository.findById(leaveDta.getLeaveId()).get();
	
	newLleaveData.setStatus(leaveDta.getStatus());
	newLleaveData.setDescription(leaveDta.getDeniedReason());
	return employeeLeaveDataRepository.save(newLleaveData);
}


public List<EmployeeLeaveData> getLeaveData() {
	// TODO Auto-generated method stub
	return employeeLeaveDataRepository.findAll();
} 

public static int getLeaveDaysBetweenTwoDates(Date startDate, Date endDate, List<HolidaysCalender> holidaysData) {

    
    Calendar startCal = Calendar.getInstance();
    startCal.setTime(startDate);        

    Calendar endCal = Calendar.getInstance();
    endCal.setTime(endDate);

    int workDays = 0;

    //Return 0 if start and end are the same
    if (startCal.getTimeInMillis() == endCal.getTimeInMillis()) {
        return 0;
    }

    if (startCal.getTimeInMillis() > endCal.getTimeInMillis()) {
        startCal.setTime(endDate);
        endCal.setTime(startDate);
    }

    do {
       //excluding start date
        startCal.add(Calendar.DAY_OF_MONTH, 1);
        long millis=startCal.getTimeInMillis();
        Date date = new Date(millis);
        Date holidayDate = null;
        for(HolidaysCalender data:holidaysData)
        {
        	
        	if(data.getHolidayDate().equals(date)) {
//        		System.out.println(data.getDescription());
        		holidayDate=data.getHolidayDate();
//        		System.out.println(holidayDate);
        		break;
        	}
        }
        if (startCal.get(Calendar.DAY_OF_WEEK) != Calendar.SATURDAY && startCal.get(Calendar.DAY_OF_WEEK) != Calendar.SUNDAY && !(date.equals(holidayDate))) {
            workDays++;
        }
        
    } while (startCal.getTimeInMillis() <= endCal.getTimeInMillis()); //excluding end date

    return workDays;
}

}
