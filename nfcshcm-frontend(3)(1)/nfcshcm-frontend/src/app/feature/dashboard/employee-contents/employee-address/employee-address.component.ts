import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import {
  debounceTime,
  distinctUntilChanged,
  tap,
  switchMap,
  catchError,
} from "rxjs/operators";
import { Observable, concat, of, Subject } from "rxjs";
import { EmployeeService } from "./../../services/employee.service";
import { Component, OnInit } from "@angular/core";
import { Employee } from "../../model/employee";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-employee-address",
  templateUrl: "./employee-address.component.html",
  styleUrls: ["./employee-address.component.css"],
})
export class EmployeeAddressComponent implements OnInit {
  has_error = false;
  create_employee_msg: String;
  isSelectLoading = false;
  submitted = false;
  addressForm: FormGroup;
  isCollpased: boolean = false;
  empId: any;
  private sub: any;
  private id: any;
  employeeData: any;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute
  ) {}
  ngOnInit() {
    // this.empId = localStorage.getItem("loginEmployeeData");
    this.routeId();
    this.getEmployeeDataById(localStorage.getItem("loginEmployeeData"));
    this.addressForm = this.formBuilder.group({
      address_type: [""],
      name: ["", [Validators.required, Validators.minLength(2)]],
      address_line1: ["", [Validators.required]],
      address_line2: ["", [Validators.required]],
      address_line3: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: [""],
      country: [""],
      pin: ["", [Validators.required]],
      phone1: [
        "",
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      phone2: [
        "",
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      ext: ["", [Validators.required]],
      fax: [""],
      mobile: [
        "",
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      email: ["", [Validators.required]],
    });
  }
  routeId() {
    this.sub = this.route.params.subscribe((params) => {
      this.empId = +params["id"]; // (+) converts string 'id' to a number
      this.getEmployeeDataById(this.empId);
      console.log(this.empId);
    });
  }
  getEmployeeById(id: number) {
    if (id != null) {
      this.employeeService.getEmployeeById(id).subscribe(
        (data) => {
          console.log(data);
          this.employeeData = data;
          // for (let empData of this.employeeData) {
          // }
        },
        (error) => {}
      );
    } else {
    }
  }
  getEmployeeDataById(empId: any) {
    this.employeeService.getEmployeeByEmpId(empId).subscribe(
      (data) => {
        this.employeeData = data;
        console.log(this.empId);
        console.log(data);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  get f() {
    return this.addressForm.controls;
  }
  onSubmit() {
    this.submitted = true;

    if (this.addressForm.invalid) {
      return;
    }
    const submissionData = {
      address_type: this.addressForm.value["address_type"],
      name: this.addressForm.value["name"],
      address_line1: this.addressForm.value["address_line1"],
      address_line2: this.addressForm.value["address_line2"],
      address_line3: this.addressForm.value["address_line3"],
      city: this.addressForm.value["city"],
      state: this.addressForm.value["state"],
      country: this.addressForm.value["country"],
      pin: this.addressForm.value["pin"],
      phone1: this.addressForm.value["phone1"],
      phone2: this.addressForm.value["phone2"],
      extension: this.addressForm.value["ext"],
      fax: this.addressForm.value["fax"],
      mobile: this.addressForm.value["mobile"],
      email: this.addressForm.value["email"],
      empId: this.empId,
    };
    this.employeeService.saveEmployeeAddress(submissionData).subscribe(
      (res) => {
        this.has_error = false;
        // this.create_leave_req_msg = 'Leave Request succesfully Submitted';
        // this.addressForm.reset();
        // this.submitted = false;
        console.log(res);
      },
      (error) => {
        // console.log("leave creation error", error.error);
        // this.has_error = true;
        // this.create_leave_req_msg = error.error.message;
        console.log(error);
      }
    );
    // console.log("success ", this.registerForm.value);
    console.log(this.addressForm.value);
  }

}
