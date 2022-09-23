import { AuthService } from './../../auth/auth.service';
import { debounceTime, distinctUntilChanged, tap, switchMap, catchError } from 'rxjs/operators';
import { Observable, concat, of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from './../../services/employee.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  private id: any;
  private sub: any;
  private isEdit = false;
<<<<<<< HEAD
=======
  employeeEditForm: FormGroup;
  supervisorEmployees: Observable<any>;
  employeeinput$ = new Subject<string>();
  isSelectLoading = false;
  expanded = false;
  isEmployeeSelected = false;
  selectedEmployee;
  selected_employee_msg;
  errorMsg;
  employeesUnderSupervision;
>>>>>>> 6d47aa7dc5dbfd05252e1e9899f08e288c890ee2
  update_employee_msg;
  has_error = false;
  submitted = false;
  employeeData:any;

  constructor(private route: ActivatedRoute,
    public _authService: AuthService, 
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.routeId();
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getEmployeeById(this.id);
      console.log(this.id);
      
    });
  }

 

  getEmployeeById(id: number) {
    if (id !=null) {
      this.employeeService.getEmployeeById(id)
        .subscribe(
          data => {
           console.log(data);
           this.employeeData=data;
          },
          error => {
          
          });
    } else {
    }
  }

  ngOnDestroy() {
   
  }

}
