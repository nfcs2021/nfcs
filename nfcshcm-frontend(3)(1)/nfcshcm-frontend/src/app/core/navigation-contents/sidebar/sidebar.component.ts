import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/feature/dashboard/services/employee.service';
import { SidebarService } from '../service/sidebar.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  employeeData:any;
  isOpen = false;

  constructor(private _sidebarService: SidebarService,
    private employeeService:EmployeeService) { }

  ngOnInit() {
    this.getEmployeeByEmpId(localStorage.getItem("loginEmployeeData"));
    this._sidebarService.change.subscribe(isOpen => {
      this.isOpen = isOpen;
    });
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
