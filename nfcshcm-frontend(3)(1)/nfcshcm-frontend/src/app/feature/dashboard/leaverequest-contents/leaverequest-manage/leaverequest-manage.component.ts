import { LeaveType } from './../../model/leaveType';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeLeaveService } from './../../services/employeeLeave.service';
import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leaveType.service';
import { IDropdownSettings } from 'ngu-multiselect-dropdown';
import { EmployeeService } from '../../services/employee.service';
import { IMultiSelectOption } from 'ngx-bootstrap-multiselect';
import { moment } from 'ngx-bootstrap/chronos/test/chain';
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
<<<<<<< HEAD
  foods: String[] = [
    "kvkrishna54@gmail.com","venureddy5656@gmail.com"
  ];

  toppingList: string[] = ["venunallamilli5656@gmail.com", "kollatiyaswanth@gmail.com", "Venu.Nallamilli@northfacein.com"];

=======
  foods: String[] = ["kvgmail.com", "venureddy5656@gmail.com"];
  toppingList: string[] = ["venunall@gmail.com", "kollatiyaswanth@gmail.com", "Venu.Nallamilli@northfacein.com"];
>>>>>>> ce5626420b6c7501b8ef2589d8ff74c04a5607df
  employeeLeaveDat: any;
  causalLeaveCout: number = 0;
  sickLeaveCount: number = 0;
  paidLeaveCount: number = 0;
  annualLeaveCount: number = 0;
  employeeLeaveData: any;
  myHolidayList: any;

  constructor(private formBuilder: FormBuilder,
    private employeeLeaveService: EmployeeLeaveService,
    private _leaveTypeService: LeaveTypeService,
    private employeeService: EmployeeService) {
    this.minDate = new Date();
  }
  ngOnInit() {
    // this.myHolidayDates.
    this.empId = localStorage.getItem("loginEmployeeData");
    this.getEmployeeDataById(localStorage.getItem("loginEmployeeData"));
    this.getEmployeeLeaveById(this.empId);
    this.leaveTypes = this._leaveTypeService.getAllLeaveTypes();
    this.getHolidaysList();
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
  getEmployeeLeaveById(empId) {
    if (empId > 0) {
      this.employeeLeaveService.getEmployeeLeaveById(empId)
        .subscribe(
          data => {
            this.employeeLeaveData = data;
            console.log(data);
            this.countLeaveData()
            // console.log('selectedEmployee data: ', data);
          }, error => {

            console.log(error);

          });
    }
  }
  getHolidaysList(){
    this.employeeLeaveService.getHolidaysList().subscribe(res => {
      console.log(res);
      this.myHolidayList=res;
    }, error => {
      console.log(error);
    });
   }

   holidayDateFilter = (dt: Date): boolean => {
    // check if date is weekend day
    const date = dt.getDay();
    if (date === 0 || date === 6) {
      return false;
    }
  
    // check if date is holiday
    let dt1 = moment(dt);
    if (this.myHolidayList) {
      return !this.myHolidayList.find(x => {
        return moment(x.holidayDate).isSame(dt1, 'day');
      });
    }
  };

  get f() { return this.leaveForm.controls; }

  workday_count = () => {
    let start = moment(this.leaveForm.value['fromDate']).format(("YYYY-MM-DD"))
    let end = moment(this.leaveForm.value['toDate']).format(("YYYY-MM-DD"))
    let workday_count = 0;
    let totalDays = moment(end).diff(moment(start), "days");
    let date: any = start
    let date1: any = start
   
    for (let i = 0; i <= totalDays; i++) {
      let holidayDate=false;
      if (i == 0) {
        date = moment(date)
      } else {
        date = moment(date).add(1, "d");
      }

      for(let data of this.myHolidayList)
      {
        let holiday = moment(data.holidayDate).format(("YYYY-MM-DD"));
        let compareDate = moment(date).format(("YYYY-MM-DD"));
        if(holiday===compareDate)
        {
           holidayDate=true;
           console.log(holidayDate);
           break;
        }
      }
      // console.log(moment(date).format(("YYYY-MM-DD")));
      date = new Date(date);
      let dayOfWeek = date.getDay();
      let isWeekend = (dayOfWeek === 6) || (dayOfWeek === 0) || holidayDate ;
      if (!isWeekend) {
        workday_count = workday_count + 1;
      }
    }
    return workday_count;
  }
  countLeaveData() {
    for (let data of this.employeeLeaveData) {
      {
        switch (data.leaveType) {

          case "Causal Leave": {
            if (data.status == 'APPROVED') {
              this.causalLeaveCout = this.causalLeaveCout + data.leaveCount;
              console.log("causaleave", this.causalLeaveCout);
            }
            break;
          }
          case "Sick Leave": {
            if (data.status == 'APPROVED') {
              this.sickLeaveCount = this.sickLeaveCount + data.leaveCount;
            }
            break;
          }
          case "Paid Leave": {
            if (data.status == 'APPROVED') {
              this.paidLeaveCount = this.paidLeaveCount + data.leaveCount;
            }
            break;
          }
          case "Annual Leave": {
            if (data.status == 'APPROVED') {
              this.annualLeaveCount = this.annualLeaveCount + data.leaveCount;
            }
            break;
          }
        }
      }

    }
  }

  onSubmit() {
    console.log(this.workday_count());

    switch (this.leaveForm.value['leaveType']) {

      case "Causal Leave": {
        let totalCount = this.causalLeaveCout + this.workday_count();
        if (this.causalLeaveCout < 6 && this.workday_count() <= 6 && totalCount <= 6) {
          alert(this.causalLeaveCout)
          this.saveLeaveData()

        } else {
          this.has_error = true;
          this.create_leave_req_msg = "Please Check Leave Limit";
        }
        break;
      }
      case "Sick Leave": {
        let totalCount = this.sickLeaveCount + this.workday_count();
        if (this.sickLeaveCount < 6 && this.workday_count() <= 6 && totalCount <= 6) {
          this.saveLeaveData()
        } else {
          this.has_error = true;
          this.create_leave_req_msg = "Please Check Leave Limit";
        }
        break;
      }
      case "Paid Leave": {
        let totalCount = this.paidLeaveCount + this.workday_count();
        if (this.paidLeaveCount < 15 && this.workday_count() <= 15 && totalCount <= 15) {
          this.saveLeaveData()
        } else {
          this.has_error = true;
          this.create_leave_req_msg = "Please Check Leave Limit";
        }
        break;
      }
      case "Annual Leave": {
        let totalCount = this.annualLeaveCount + this.workday_count();
        if (this.annualLeaveCount < 15 && this.workday_count() <= 15 && totalCount <= 15) {
          this.saveLeaveData()
        } else {
          this.has_error = true;
          this.create_leave_req_msg = "Please Check Leave Limit";
        }
        break;
      }
    }
  }

  saveLeaveData() {
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
    this.employeeLeaveService.createEmployeeLeave(submissionData).subscribe(res => {
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
}
