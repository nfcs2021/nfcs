package com.nfcs.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nfcs.dto.EmployeeAddressDto;
import com.nfcs.model.Employee;
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
		newEmployeeAddress.setCity(employeeAddressDto.getCity());
		newEmployeeAddress.setState(employeeAddressDto.getState());
		newEmployeeAddress.setCountry(employeeAddressDto.getCountry());
		newEmployeeAddress.setPin(employeeAddressDto.getPin());
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
//	public EmployeeAddress getAddressByEmpId(String empId) {
//
//		return employeeAddressRepository.findAddressByEmpId(empId);
//	}

	public EmployeeAddress updateEmpAddressById(EmployeeAddress employeeAddressDto) {
		List<EmployeeAddress> newUser = employeeAddressRepository.findAddressByEmpId(employeeAddressDto.getEmpId());

		if (newUser.size() > 0) {

			for (EmployeeAddress employeeAddress : newUser) {
//			System.out.println("hiiiii"+employeeAddress.getAddress_type());
//			System.out.println("hiiiii"+employeeAddressDto.getAddress_type());
				if (employeeAddress.getAddress_type().equals(employeeAddressDto.getAddress_type())) {
//				System.out.println("hiiiii"+newUser.size());
					EmployeeAddress updatgeEmployeeAddress = employeeAddressRepository
							.findById(employeeAddress.getAddr_id()).get();
					System.out.println("hiiiii" + updatgeEmployeeAddress);
					updatgeEmployeeAddress.setAddress_type(employeeAddressDto.getAddress_type());
					updatgeEmployeeAddress.setName(employeeAddressDto.getName());
					updatgeEmployeeAddress.setAddress_line1(employeeAddressDto.getAddress_line1());
					updatgeEmployeeAddress.setAddress_line2(employeeAddressDto.getAddress_line2());
					updatgeEmployeeAddress.setAddress_line3(employeeAddressDto.getAddress_line3());
					updatgeEmployeeAddress.setEmail(employeeAddressDto.getEmail());
					updatgeEmployeeAddress.setPhone1(employeeAddressDto.getPhone1());
					updatgeEmployeeAddress.setPhone2(employeeAddressDto.getPhone2());
					updatgeEmployeeAddress.setMobile(employeeAddressDto.getMobile());
					updatgeEmployeeAddress.setExtension(employeeAddressDto.getExtension());
					updatgeEmployeeAddress.setFax(employeeAddressDto.getFax());
					updatgeEmployeeAddress.setEmpId(employeeAddressDto.getEmpId());
					updatgeEmployeeAddress.setCity(employeeAddressDto.getCity());
					updatgeEmployeeAddress.setState(employeeAddressDto.getState());
					updatgeEmployeeAddress.setCountry(employeeAddressDto.getCountry());
					updatgeEmployeeAddress.setPin(employeeAddressDto.getPin());
					return employeeAddressRepository.save(updatgeEmployeeAddress);
				}

			}
		}

		return employeeAddressRepository.save(employeeAddressDto);

	}

}
