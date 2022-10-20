export class SearchModel {
  First_Name: any;
  Last_Name: any;
  Date_of_birth: any;
  Ssn: any;
}

export interface Patient {
  id: any;
  First_Name: any;
  Last_Name: any;
  Date_of_birth: any;
  Contact_Number: any;
  Gender: any;
  Email_address: any;
  Ssn: any;
  Address_Line1: any;
  Address_Line2: any;
  Country: any;
  State: any;
  City: any;
  Zipcode: any;
  Insurance_Number: any;
  Created_by: any;
}
export interface PatientRecord {
  id: any;
  Patient_id: any;
  Patient_report: any;
  Physician_report: any;
  PCP_Name: any;
  Created_by: any;
  Visit_time: any;
}

export class SearchDate {
  toDate: any;
  fromDate: any;
}
