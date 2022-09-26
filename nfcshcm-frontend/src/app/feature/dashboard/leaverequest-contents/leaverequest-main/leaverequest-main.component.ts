import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-leaverequest-main',
  templateUrl: './leaverequest-main.component.html',
  styleUrls: ['./leaverequest-main.component.css']
})
export class LeaverequestMainComponent implements OnInit {
  employeeData:any;
  constructor( private router: Router,
    private employeeService:EmployeeService
    ) { }

  ngOnInit() {
    this.getEmployeeByEmpId(localStorage.getItem("loginEmployeeData"));
    if (this.employeeData.position!='admin') {
      this.router.navigate(['/home/leaverequests/leavebalance']);
    }
    
  }

  getEmployeeByEmpId(empId: any) {
    this.employeeService.getEmployeeByEmpId(empId).subscribe(
      data => {
        this.employeeData=data;
        console.log(data);
      }, error => {
        console.log(error);

      }
    )
  }

}
