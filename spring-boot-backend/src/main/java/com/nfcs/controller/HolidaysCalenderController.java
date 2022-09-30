package com.nfcs.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nfcs.model.HolidaysCalender;
import com.nfcs.service.HolidaysCalenderService;

@RestController
@RequestMapping
public class HolidaysCalenderController {
	
	
	@Autowired
	HolidaysCalenderService holidaysCalenderService;
	
	
	@PostMapping("/holidays")
	public  ResponseEntity<HolidaysCalender> save(@RequestBody HolidaysCalender holidaysCalender) {
		
		return ResponseEntity.ok(holidaysCalenderService.save(holidaysCalender));
		
	}
	
	@GetMapping("/holidays")
	public  ResponseEntity<List<HolidaysCalender>> getHolidaysList() {
		
		return ResponseEntity.ok(holidaysCalenderService.getHolidaysList());
		
	}

}
