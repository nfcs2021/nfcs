import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeLeaveService } from '../../services/employeeLeave.service';

@Component({
  selector: 'app-leave-balance',
  templateUrl: './leave-balance.component.html',
  styleUrls: ['./leave-balance.component.css']
})
export class LeaveBalanceComponent implements OnInit {
  employeeLeaveData: any;
  causalLeave:number=6;
  sickLeave:number=6;
  paidLeave:number=15;
  annualLeave:number=15;
  constructor(private router: Router,
    private employeeLeaveService: EmployeeLeaveService) { }

  ngOnInit() {
    this.router.navigate(['/home/leaverequests/leavebalance']);

    this.getEmployeeLeaveById(localStorage.getItem("loginEmployeeData"));

  }

  countLeaveData() {
    for (let data of this.employeeLeaveData) {
      {
        switch(data.leaveType){
         
          case "Causal Leave" : {
            if(data.status=='APPROVED'){
              this.causalLeave=this.causalLeave-data.leaveCount;
            }
            break;
          }
          case "Sick Leave" : {
            if(data.status=='APPROVED'){
              this.sickLeave=this.sickLeave-data.leaveCount;
            }
            break;
          }
          case "Paid Leave" : {
            if(data.status=='APPROVED'){
              this.paidLeave=this.paidLeave-data.leaveCount;
            }
            break;
          }
          case "Annual Leave" : {
            if(data.status=='APPROVED'){
              this.annualLeave=this.annualLeave-data.leaveCount;
            }
            break;
          }
        }
      }

    }
  }



  getEmployeeLeaveById(empId) {
    if (empId > 0) {
      this.employeeLeaveService.getEmployeeLeaveById(empId)
        .subscribe(
          data => {
            this.employeeLeaveData = data;
            console.log(data);
            this.countLeaveData();
            // console.log('selectedEmployee data: ', data);
          }, error => {

            console.log(error);

          });
    } else {

    }
  }

}
