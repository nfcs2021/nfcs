package com.nfcs.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class LeaveRequestDataDto {

  public long leaveId;
  public String deniedReason;
  public String status;
}
