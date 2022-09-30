import { Injectable } from "@angular/core";

import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";

import { Constant } from "../constant/constant";
import { Employee } from "../model/employee";

@Injectable()
export class EmployeeService {
  constructor(private http: HttpClient) {}

  errorHandler(error: any) {
    console.log("Employee api error ", error);
    return throwError(error);
  }

  getAllEmployees(): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
    return this.http
      .get<Employee[]>("http://localhost:8081/data/employee", {
        headers: httpheaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  getEmployeeById(id): Observable<Employee[]> {
    const httpheaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token"),
    });

    return this.http
      .get<Employee[]>("http://localhost:8081/data/employee/" + id, {
        headers: httpheaders,
      })
      .pipe(catchError(this.errorHandler));
  }
  getEmployeeByEmpId(empId): Observable<Employee[]> {
    const httpheaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token"),
    });

    return this.http
      .get<Employee[]>("http://localhost:8081/data/employeeByEmpId/" + empId, {
        headers: httpheaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  sendEmail(data): Observable<object> {
    const httpheaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
    return this.http
      .post<object>("http://localhost:8081/data/register-employee", data, {
        headers: httpheaders,
      })
      .pipe(catchError(this.errorHandler));
  }

  createEmployee(EmployeeData): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
    return this.http
      .post<any>("http://localhost:8081/data/employee", EmployeeData, {
        headers: httpheaders,
      })
      .pipe(catchError(this.errorHandler));
  }
  saveEmployeeAddress(addressData): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authoriztion: "Bearer" + localStorage.getItem("token"),
    });
    return this.http
      .post<any>("http://localhost:8081/address/saveAddress", addressData, {
        headers: httpheaders,
      })
      .pipe(catchError(this.errorHandler));
  }
  updateEmployeeAddressById(addressData): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authoriztion: "Bearer" + localStorage.getItem("token"),
    });
    return this.http
      .patch<any>("http://localhost:8081/address/updateAddress", addressData, {
        headers: httpheaders,
      })
      .pipe(catchError(this.errorHandler));
  }
  getEmployeeAddressById(empId): Observable<any> {
    const httpheaders = new HttpHeaders({
      Authorization: "Bearer " + localStorage.getItem("token"),
    });
    return this.http
      .get<any>("http://localhost:8081/address/getEmployeeAddress/" + empId, {
        headers: httpheaders,
      })
      .pipe(catchError(this.errorHandler));
  }
  getEmployeeAddress;
  updateEmployee(EmployeeData): Observable<Employee[]> {
    return this.http
      .put<any>(Constant.API_ENDPOINT + "/rest/employees", EmployeeData)
      .pipe(catchError(this.errorHandler));
  }
  getEmployeeUnderSupervision(id): Observable<Employee[]> {
    return this.http
      .get<Employee[]>(
        Constant.API_ENDPOINT +
          "/rest/employees/employees-under-supervision/" +
          id
      )
      .pipe(catchError(this.errorHandler));
  }
  getEmployeeByFullName(inputvalue): Observable<Employee> {
    return this.http
      .get<Employee>(
        Constant.API_ENDPOINT + "/rest/employees/employee-by-fullname",
        {
          params: {
            fullname: inputvalue,
          },
        }
      )
      .pipe(catchError(this.errorHandler));
  }
  updatePassword(oldPassword, newPassword): Observable<Employee> {
    const body = new FormData();
    body.append("oldPassword", oldPassword);
    body.append("newPassword", newPassword);
    return this.http
      .put<any>(Constant.API_ENDPOINT + "/rest/employees/update-password", body)
      .pipe(catchError(this.errorHandler));
  }
  getCurrentEmployee(): Observable<Employee> {
    return this.http
      .get<Employee>(Constant.API_ENDPOINT + "/rest/employees/me")
      .pipe(catchError(this.errorHandler));
  }
}
