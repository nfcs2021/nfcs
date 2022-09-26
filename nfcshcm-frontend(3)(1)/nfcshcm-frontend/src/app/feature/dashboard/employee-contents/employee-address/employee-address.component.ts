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
  registerForm: FormGroup;
  isCollpased: boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private _employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      name: ["", [Validators.required, Validators.minLength(2)]],
      addressLine1: ["", [Validators.required]],
      addressLine2: ["", [Validators.required]],
      addressLine3: ["", [Validators.required]],
      city: ["", [Validators.required]],
      state: [""],
      Country: [""],
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
      nobile: [
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
  get f() {
    return this.registerForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    // console.log("success ", this.registerForm.value);
    console.log(this.registerForm);
  }
  submit() {
    this.isCollpased = true;
  }
}
