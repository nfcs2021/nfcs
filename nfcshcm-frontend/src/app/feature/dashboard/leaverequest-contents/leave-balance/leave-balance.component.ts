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
  employeeLeaveData: import("d:/work/angular/nfcshcm-frontend/src/app/feature/dashboard/model/EmployeeLeave").EmployeeLeave;
 
  
  constructor( private router: Router,
    private employeeLeaveService:EmployeeLeaveService) { }

  ngOnInit() {
    this.router.navigate(['/home/leaverequests/leavebalance']);
    
    this.getEmployeeLeaveById(localStorage.getItem("loginEmployeeData"));
    
  }

  getEmployeeLeaveById(empId) {
    if (empId > 0) {
      this.employeeLeaveService.getEmployeeLeaveById(empId)
        .subscribe(
          data => {
this.employeeLeaveData=data;
           console.log(data);
           
            // console.log('selectedEmployee data: ', data);
          }, error => {
           
            console.log(error);
            
          });
    } else {
      
    }
  }

}
