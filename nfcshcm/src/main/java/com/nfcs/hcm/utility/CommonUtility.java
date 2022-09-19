package com.nfcs.hcm.utility;

import java.util.ArrayList;
import java.util.List;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.dto.UserDto;
import com.nfcs.hcm.model.Employee;
import com.nfcs.hcm.model.UserDao;

public class CommonUtility {
//	public static List<EmployeeDto> getUserDTOList(List<Employee> northDeskList) {
//		List<EmployeeDto> northDeskDtoList = new ArrayList<EmployeeDto>();
//		northDeskList.stream().forEach(northDesk -> {
//			northDeskDtoList.add(getUserDTO(northDesk));
//		});
//		return northDeskDtoList;
//	}
//
//	public static NorthDeskDto getUserDTO(NorthDesk northDesk) {
//		List<NorthDeskDto> userDtoList = new ArrayList<NorthDeskDto>();
//		return new NorthDeskDto(northDesk.getId(), northDesk.getProject(), northDesk.getPriority(),
//				northDesk.getIsuueType(), northDesk.getSubject(), northDesk.getDescription(),
//				northDesk.getAttachments(), northDesk.getUser_id());
//	}

	public static List<UserDto> getuserDtos(List<UserDao> userDaos) {
		List<UserDto> dtos = new ArrayList<UserDto>();
		userDaos.stream().forEach(user -> {
			dtos.add(getUsers(user));
		});
		return dtos;
	}

	public static UserDto getUsers(UserDao dao) {
		List<UserDto> userDtos = new ArrayList<UserDto>();
		return new UserDto(dao.getUser_id(), dao.getUsername(), dao.getDataOfBirth(), dao.getEmail(), dao.getAddress(),
				dao.getPhoneNumber(), dao.getPassword());
	}

	public static List<EmployeeDto> getEmployeeDtos(List<Employee> employeeList) {
		List<EmployeeDto> employeeDtos = new ArrayList<EmployeeDto>();
		employeeList.stream().forEach(employee -> {
			employeeDtos.add(getEmployees(employee));
		});
		return employeeDtos;
	}

	public static EmployeeDto getEmployees(Employee employee) {
		// TODO Auto-generated method stub
		List<EmployeeDto> employeeDtoList = new ArrayList<EmployeeDto>();
		return new EmployeeDto(employee.getEmpId(), employee.getEmpNoSeries(), employee.getEmpNo(),
				employee.getEmpname(), employee.getDateOfBirth(), employee.getGender(), employee.getReportingManager(),
				employee.getStatus(), employee.getDateOfJoining(), employee.getProbationPeriod(),
				employee.getConfirmationDate(), employee.getEmail(), employee.getPhoneNumber(),
				employee.getEmergencyContactName(), employee.getEmergencyContactNumber(), employee.getFatherName(),
				employee.getSpouseName());
	}
}
