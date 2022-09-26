import { EmployeeService } from './../../services/employee.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, Subject, concat, of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { EmployeeLeaveService } from '../../services/employeeLeave.service';

@Component({
  selector: 'app-leaverequest-list',
  templateUrl: './leaverequest-list.component.html',
  styleUrls: ['./leaverequest-list.component.css']
})
export class LeaverequestListComponent implements OnInit {

  leaveRequests;
  errorMsg;

  loading = true;
  currentPage = 1;
  totalElements;
  numberOfElements;
  size = 10;
  sortKey = 'fromDate';
  reverse = false;
  employeeData:any;
  employeeLeaveData:any;
  allEmployees:any;
  employeeinput$ = new Subject<string>();
   isSelectLoading = false;


  constructor(private _employeeLeaveService: EmployeeLeaveService,
     private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployeeByEmpId(localStorage.getItem("loginEmployeeData"));
  }
  getEmployeeByEmpId(empId: any) {
    this.employeeService.getEmployeeByEmpId(empId).subscribe(
      data => {
        this.employeeData=data;
        if(this.employeeData.position=='admin' || this.employeeData.position=='hr')
            {
              this.getAllEmployeeLeaves(); 
              this.getAllEmployees();
            }else{
              this.getEmployeeLeaveById(this.employeeData.empId);
              this.getAllEmployeeLeaves();
              var data1:any[]=data;
              this.allEmployees=data1;
            }
        
        console.log(data);
      }, error => {
        console.log(error);

      }
    )
  }
  getPage(page: number) {
    this.loading = true;
    this.currentPage = page;
   
  }
  sort(key: string) {
    this.loading = true;
    this.sortKey = key + ','.concat(this.reverse ? 'DESC' : 'ASC');
    this.reverse = !this.reverse;
    
  }

  getAllEmployeeLeaves() {
    this._employeeLeaveService.getAllEmployeeLeaves()
      .subscribe(
        data => {
          console.log('employeesLeavedata: ', data);
          this.employeeLeaveData=data;
          this.loading = false;
        },
        error => this.errorMsg = error);
  }
  getEmployeeLeaveById(id: number) {
    if (id > 0) {
      this._employeeLeaveService.getEmployeeLeaveById(id)
        .subscribe(
          data => {
this.employeeLeaveData=data;
           console.log(data);
           this.loading = false;
            // console.log('selectedEmployee data: ', data);
          }, error => {
            this.errorMsg = error;
            console.log(error);
            
          });
    } else {
      
    }
  }
  getAllEmployees() {
    this.employeeService.getAllEmployees()
      .subscribe(
        data => {
        this.allEmployees=data;
        console.log(data);
        
        },
        error => {
        this.errorMsg = error
        console.log(error);
  });
       
  
  }
  
  private loadEmployee() {
    concat(
      of([]), // default items
      this.employeeinput$.pipe(
        debounceTime(200),
        distinctUntilChanged(),
        tap(() => this.isSelectLoading = true),
        switchMap(term => this.employeeService.getEmployeeByFullName(term).pipe(
          catchError(() => of([])), // empty list on error
          tap(() => this.isSelectLoading = false)
        ))
      )
    );
  }

}
