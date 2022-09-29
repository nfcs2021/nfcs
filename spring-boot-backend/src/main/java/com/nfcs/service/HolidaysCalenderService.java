package com.nfcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nfcs.model.HolidaysCalender;
import com.nfcs.repository.HolidaysCalenderRepository;


@Service
public class HolidaysCalenderService {

	@Autowired
	private HolidaysCalenderRepository holidaysCalenderRepository;
	
	
	public List<HolidaysCalender> getHolidaysList() {
		
		List<HolidaysCalender> holidaysData=holidaysCalenderRepository.findAll();
		
		return holidaysData;
	}


	public HolidaysCalender save(HolidaysCalender holidaysCalender) {
		// TODO Auto-generated method stub
		return  holidaysCalenderRepository.save(holidaysCalender); 
	}
}
