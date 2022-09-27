package com.nfcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nfcs.dto.EmployeeAddressDto;
import com.nfcs.model.EmployeeAddress;
import com.nfcs.model.EmployeeLeaveData;
import com.nfcs.repository.EmployeeAddressRepository;

@Service
public class EmployeeAddressService {

	@Autowired
	private EmployeeAddressRepository employeeAddressRepository;

	public EmployeeAddress saveAddress(EmployeeAddressDto employeeAddressDto) {
		EmployeeAddress newEmployeeAddress = new EmployeeAddress();
		newEmployeeAddress.setAddr_id(employeeAddressDto.getAddr_id());
		newEmployeeAddress.setAddress_type(employeeAddressDto.getAddress_type());
		newEmployeeAddress.setName(employeeAddressDto.getName());
		newEmployeeAddress.setAddress_line1(employeeAddressDto.getAddress_line1());
		newEmployeeAddress.setAddress_line2(employeeAddressDto.getAddress_line2());
		newEmployeeAddress.setAddress_line3(employeeAddressDto.getAddress_line3());
		newEmployeeAddress.setEmail(employeeAddressDto.getEmail());
		newEmployeeAddress.setPhone1(employeeAddressDto.getPhone1());
		newEmployeeAddress.setPhone2(employeeAddressDto.getPhone2());
		newEmployeeAddress.setMobile(employeeAddressDto.getMobile());
		newEmployeeAddress.setExtension(employeeAddressDto.getExtension());
		newEmployeeAddress.setFax(employeeAddressDto.getFax());
		newEmployeeAddress.setEmpId(employeeAddressDto.getEmpId());
		return employeeAddressRepository.save(newEmployeeAddress);

	}

	public List<EmployeeAddress> findAddress() {
		List<EmployeeAddress> employeeAddress = employeeAddressRepository.findAll();
		return employeeAddress;
	}

	public List<EmployeeAddress> getAddressByEmpNo(String empId) {
		List<EmployeeAddress> employeeAddresses = employeeAddressRepository.findAddressByEmpId(empId);
		return employeeAddresses;
	}

}
