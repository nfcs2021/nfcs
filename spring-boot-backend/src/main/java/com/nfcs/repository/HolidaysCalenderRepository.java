package com.nfcs.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.nfcs.model.HolidaysCalender;

@Repository
public interface HolidaysCalenderRepository extends JpaRepository<HolidaysCalender, Long> {

	

}
