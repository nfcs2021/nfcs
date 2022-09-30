import { Employee } from './../model/employee';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Constant } from '../constant/constant';
import { EmployeeLeave } from '../model/EmployeeLeave';

@Injectable()
export class EmployeeLeaveService {
  

  constructor(private http: HttpClient) { }

  errorHandler(error: HttpErrorResponse) {
    console.log('EmployeeLeave api error ', error);
    return throwError(error);
  }

  saveHolidayDate(data: any) {
    const httpheaders = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      });

      return this.http.post<any>("http://localhost:8081/holidays",data,{ headers: httpheaders })
      .pipe(catchError(this.errorHandler));
  }
    
  getHolidaysList(): Observable<any>{
    const httpheaders = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      });

      return this.http.get<any>("http://localhost:8081/holidays",{ headers: httpheaders })
      .pipe(catchError(this.errorHandler));
  }

  getAllEmployeeLeaves(): Observable<any> {
    const httpheaders = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      });

    return this.http.get<EmployeeLeave[]>("http://localhost:8081/employee/leavedata",{ headers: httpheaders })
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeLeaveByLeaveId(id): Observable<EmployeeLeave> {

    const httpheaders = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      });

    return this.http.get<EmployeeLeave>("http://localhost:8081/employee/leavedata/" + id,{ headers: httpheaders })
      .pipe(catchError(this.errorHandler));
  }

  CancelLeaveRequest(id:any):Observable<any>{
    const httpheaders = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      });
      return this.http.put<EmployeeLeave>("http://localhost:8081/employee/CancelLeaveRequest/" +id,{ headers: httpheaders })
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeLeaveById(id): Observable<EmployeeLeave> {

    const httpheaders = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      });

    return this.http.get<EmployeeLeave>("http://localhost:8081/employee/leavedataEmpId/" + id,{ headers: httpheaders })
      .pipe(catchError(this.errorHandler));
  }

  createEmployeeLeave(EmployeeLeaveData): Observable<EmployeeLeave> {
    const httpheaders = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      });
    return this.http.post<EmployeeLeave>('http://localhost:8081/employee/leavedata', EmployeeLeaveData,{ headers: httpheaders })
      .pipe(catchError(this.errorHandler));
  }

  updateEmployeeLeave(EmployeeLeaveData, id): Observable<EmployeeLeave> {
    return this.http.put<EmployeeLeave>(Constant.API_ENDPOINT + '/rest/employee-leaves/' + id, EmployeeLeaveData)
      .pipe(catchError(this.errorHandler));
  }

  approveEmployeeLeave(EmployeeLeaveData): Observable<EmployeeLeave> {
    const httpheaders = new HttpHeaders(
      {
        'Authorization': 'Bearer ' + localStorage.getItem("token")
      });
    return this.http.put<EmployeeLeave>('http://localhost:8081/employee/leavedata',EmployeeLeaveData,{ headers: httpheaders })
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeLeavesBetweenDate(startDate, endDate): Observable<EmployeeLeave[]> {
    return this.http.get<EmployeeLeave[]>(Constant.API_ENDPOINT + '/rest/employee-leaves/byDate',
    {
      params: {
        date1: startDate,
        date2: endDate
      }
    })
      .pipe(catchError(this.errorHandler));
  }
}
