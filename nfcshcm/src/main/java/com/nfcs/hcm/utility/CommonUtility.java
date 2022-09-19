package com.nfcs.hcm.utility;

import java.util.ArrayList;
import java.util.List;

import com.nfcs.hcm.dto.EmployeeDto;
import com.nfcs.hcm.dto.UserDto;
import com.nfcs.hcm.model.Employee;
import com.nfcs.hcm.model.UserDao;

public class CommonUtility {

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
			employeeDtos.add(getEmployee(employee));
		});
		return employeeDtos;
	}

	public static EmployeeDto getEmployee(Employee employee) {
		// TODO Auto-generated method stub
		List<EmployeeDto> employeeDtoList = new ArrayList<EmployeeDto>();
		return new EmployeeDto(employee.getEmpId(), employee.getEmpNoSeries(), employee.getEmpNo(),
				employee.getEmpname(), employee.getDateOfBirth(), employee.getGender(), employee.getReportingManager(),
				employee.getStatus(), employee.getDateOfJoining(), employee.getProbationPeriod(),
				employee.getConfirmationDate(), employee.getEmail(), employee.getPhoneNumber(),
				employee.getEmergencyContactName(), employee.getEmergencyContactNumber(), employee.getFatherName(),
				employee.getSpouseName(), employee.getDivision(), employee.getCostCenter(), employee.getGrade(),
				employee.getDesignation(), employee.getLocation(), employee.getDepartment());
	}
}
