package com.nfcs.hcm.utility;

import java.util.ArrayList;
import java.util.List;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.model.EmployeeDao;

public class CommonUtility {

	public static List<EmployeeDto> getuserDtos(List<EmployeeDao> userDaos) {
		List<EmployeeDto> dtos = new ArrayList<EmployeeDto>();
		userDaos.stream().forEach(user -> {
			dtos.add(getUsers(user));
		});
		return dtos;
	}

	public static EmployeeDto getUsers(EmployeeDao dao) {
		List<EmployeeDto> userDtos = new ArrayList<EmployeeDto>();
		return new EmployeeDto(dao.getEmpId(), dao.getEmpNo(), dao.getEmpname(), dao.getDateOfBirth(), dao.getGender(),
				dao.getReportingManager(), dao.getStatus(), dao.getDateOfJoining(), dao.getProbationPeriod(),
				dao.getConfirmationDate(), dao.getEmail(), dao.getPhoneNumber(), dao.getEmergencyContactName(),
				dao.getEmergencyContactNumber(), dao.getFatherName(), dao.getPosition(), dao.getPassword());
	}
}
