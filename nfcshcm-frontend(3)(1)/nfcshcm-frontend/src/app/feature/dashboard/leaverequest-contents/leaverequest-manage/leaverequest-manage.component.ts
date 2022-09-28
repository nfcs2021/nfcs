import { LeaveType } from './../../model/leaveType';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeLeaveService } from './../../services/employeeLeave.service';
import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leaveType.service';
import { IDropdownSettings } from 'ngu-multiselect-dropdown';
import { EmployeeService } from '../../services/employee.service';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';



@Component({
  selector: 'app-leaverequest-manage',
  templateUrl: './leaverequest-manage.component.html',
  styleUrls: ['./leaverequest-manage.component.css']
})
export class LeaverequestManageComponent implements OnInit {

  create_leave_req_msg: string;
  public has_error = false;
  leaveTypes: Observable<any>;
  selectedLeaveType: LeaveType = null;
  leaveForm: FormGroup;
  minDate: Date;
  submitted = false;
  loginEmployeeData: any;
  empId: any;
  //dropdownSettings = {};
  foods: String[] = [
    "kvkrishna54@gmail.com","venureddy5656@gmail.com"
  ];
  myHolidayDates = [
    
    new Date("12/20/2022"),
    new Date("12/17/2022"),
    new Date("12/25/2022"),
    new Date("12/4/2022"),
    new Date("12/7/2022"),
    new Date("10/05/2022"),
   
    new Date("10/25/2022"),
    new Date("12/25/2022")
];

  toppingList: string[] = ["venunallamilli5656@gmail.com", "kollatiyaswanth@gmail.com", "Venu.Nallamilli@northfacein.com"];

  constructor(private formBuilder: FormBuilder,
    private _employeeLeaveService: EmployeeLeaveService,
    private _leaveTypeService: LeaveTypeService,
    private employeeService: EmployeeService) {
    this.minDate = new Date();
  }
  ngOnInit() {
    this.empId = localStorage.getItem("loginEmployeeData");
    this.getEmployeeDataById(localStorage.getItem("loginEmployeeData"));
    this.leaveTypes = this._leaveTypeService.getAllLeaveTypes();

    this.leaveForm = this.formBuilder.group({
      leaveType: ['', Validators.required],
      leaveReason: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required],
      selectedValue: [''],
      ccMail: []
    });

  }

  getEmployeeDataById(empId: any) {
    this.employeeService.getEmployeeByEmpId(empId).subscribe(
      data => {
        console.log(data);
      }, error => {
        console.log(error);

      }
    )
  }

  get f() { return this.leaveForm.controls; }

  onSubmit() {
    console.log(this.leaveForm.value);

    this.submitted = true;

    if (this.leaveForm.invalid) {
      return;
    }
    const submissionData = {
      'leaveType': this.leaveForm.value['leaveType'],
      'leaveReason': this.leaveForm.value['leaveReason'],
      'dateFrom': this.leaveForm.value['fromDate'],
      'dateTo': this.leaveForm.value['toDate'],
      'empId': this.empId,
      'toMail': this.leaveForm.value['selectedValue'],
      'toCc': this.leaveForm.value['ccMail'],

    };

    this._employeeLeaveService.createEmployeeLeave(submissionData).subscribe(res => {
      this.has_error = false;
      this.create_leave_req_msg = 'Leave Request succesfully Submitted';
      this.leaveForm.reset();
      this.submitted = false;
      console.log(res);

    }, error => {
      // console.log("leave creation error", error.error);
      this.has_error = true;
      this.create_leave_req_msg = error.error.message;
      console.log(error);

    });
  }
  myHolidayFilter1 = (d: Date): boolean => {
    const time=d.getTime();
    const day = d.getDay();
    return   !this.myHolidayDates.find(x=>x.getTime()==time) &&  day !== 0 && day !== 6 
  }
  
  myHolidayFilter2 = (d: Date): boolean => {
    const time=d.getTime();
    const day = d.getDay();
    return   !this.myHolidayDates.find(x=>x.getTime()==time) &&  day !== 0 && day !== 6 
  }
  


}
