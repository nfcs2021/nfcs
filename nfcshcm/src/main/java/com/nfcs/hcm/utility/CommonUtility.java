package com.nfcs.hcm.utility;

import java.util.ArrayList;
import java.util.List;

//import com.nfcs.hcm.dto.NorthDeskDto;
import com.nfcs.hcm.dto.UserDto;
//import com.nfcs.hcm.model.NorthDesk;
import com.nfcs.hcm.model.UserDao;

public class CommonUtility {
//	public static List<NorthDeskDto> getUserDTOList(List<NorthDesk> northDeskList) {
//		List<NorthDeskDto> northDeskDtoList = new ArrayList<NorthDeskDto>();
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
}
