import { LeaveType } from './../../model/leaveType';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeLeaveService } from './../../services/employeeLeave.service';
import { Component, OnInit } from '@angular/core';
import { LeaveTypeService } from '../../services/leaveType.service';
import { IDropdownSettings } from 'ngu-multiselect-dropdown';



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
  mdb: any;
 
  dropdownList = [];
  selectedItems = [];
  //dropdownSettings = {};
  constructor(private formBuilder: FormBuilder, private _employeeLeaveService: EmployeeLeaveService,
     private _leaveTypeService: LeaveTypeService) {
      this.minDate = new Date();
      }
      dropdownSettings:IDropdownSettings;
  ngOnInit() {
    this.leaveTypes = this._leaveTypeService.getAllLeaveTypes();

    this.leaveForm = this.formBuilder.group({
      leaveType: ['', Validators.required],
      leaveReason: ['', Validators.required],
      fromDate: ['', Validators.required],
      toDate: ['', Validators.required]
    });

    this.dropdownList = [
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    // this.selectedItems = [
    //   { item_id: 3, item_text: 'Pune' },
    //   { item_id: 4, item_text: 'Navsari' }
    // ];
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      
      allowSearchFilter: true
    };
    
   }
   onItemSelect(item: any) {
    console.log(item);
  }
  
  get f() { return this.leaveForm.controls; }

  onSubmit() {
    this.submitted = true;
  //    this.leaveForm.reset();
  // console.log(this.leaveForm);

    // stop here if form is invalid
    if (this.leaveForm.invalid) {
      return;
    }
    const submissionData = { ...this.leaveForm.value, 'leaveTypeDTO': { 'leaveTypeId': this.leaveForm.value.leaveType } };

    this._employeeLeaveService.createEmployeeLeave(submissionData).subscribe(res => {
      this.has_error = false;
      this.create_leave_req_msg = 'Leave Request succesfully Submitted';
      this.leaveForm.reset();
      this.submitted = false;
    }, error => {
      // console.log("leave creation error", error.error);
      this.has_error = true;
      this.create_leave_req_msg = error.error.message;
    });
  }

 

}
