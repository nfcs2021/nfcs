import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, concat, of, Subject } from 'rxjs';
import { EmployeeService } from './../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-manage',
  templateUrl: './employee-manage.component.html',
  styleUrls: ['./employee-manage.component.css']
})
export class EmployeeManageComponent implements OnInit {

  has_error = false;
  create_employee_msg: String;
  supervisorEmployees: Observable<any>;
  employeeinput$ = new Subject<string>();
  employeeSupervisor: Employee = null;
  isSelectLoading = false;
  submitted = false;
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, 
    private employeeService: EmployeeService,
    private route:Router) { }

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      employeeno: ['', [Validators.required,]],
      probationPeriod:['',[Validators.required]],
      conformationDate:['',[Validators.required]],
      dob:['',[Validators.required]],
      email: [''],
      mobileNumber: ['', [Validators.required, Validators.min(1000000000), Validators.max(9999999999)]],
      reportingManager:[''],
      emergencyContactName:[''],
      emergencyContactNumber:[''],
      dateOfJoining:['',[Validators.required]],
      fatherName: [''],
      gender: ['', Validators.required],
      status:['',Validators.required],
      position:['',[]],
      spouseName:['']
    });


    this.loadEmployee();
  }

  private loadEmployee() {
   
    this.supervisorEmployees = concat(
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

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
//     if (this.registerForm.invalid) {
//       return;
//     }
//     const data ={
//       'empname':this.registerForm.value['name'],
//       'empId':this.registerForm.value['employeeno'],
//       'dateOfBirth':this.registerForm.value['dob'],
//       'gender':this.registerForm.value['gender'],
//       'reportingManager':this.registerForm.value['reportingManager'],
//       'status':this.registerForm.value['status'],
//       'dateOfJoining':this.registerForm.value['dateOfJoining'],
//       'probationPeriod':this.registerForm.value['probationPeriod'],
//       'confirmationDate':this.registerForm.value['conformationDate'],
//       'email':this.registerForm.value['email'],
//       'phoneNumber':this.registerForm.value['mobileNumber'],
//       'emergencyContactName':this.registerForm.value['emergencyContactName'],
//       'emergencyContactNumber':this.registerForm.value['emergencyContactNumber'],
//       'fatherName':this.registerForm.value['fatherName'],
//       'spouseName':this.registerForm.value['spouseName'],
//       'position':this.registerForm.value['position'],
//     }
   
// console.log(data);

    // this.employeeService.createEmployee(data).subscribe(res => {
    //   this.has_error = false;
    //   this.create_employee_msg = 'Registration Successful';
    //   this.registerForm.reset();
    //   this.submitted = false;
    // }, error => {
    //   console.log(error);
    //   this.has_error = true;
    //   this.create_employee_msg = error.error.message;
    // });
this.route.navigate(['/home/employees/details']);

  }

}
