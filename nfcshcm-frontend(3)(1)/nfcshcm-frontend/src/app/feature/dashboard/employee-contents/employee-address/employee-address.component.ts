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
import { ActivatedRoute, Router } from "@angular/router";

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
  empid: any;
  private sub: any;
  private id: any;
  employeeData: any;
  addressType: any;
  addressList: any;
  constructor(
    private formBuilder: FormBuilder,
    private employeeService: EmployeeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    // this.empId = localStorage.getItem("loginEmployeeData");
    this.routeId();
    // this.getEmployeeDataById(localStorage.getItem("loginEmployeeData"));
    console.log(this.addressList.address_type);
  }
  addressFormLoad() {
    alert(1);
    console.log("onitit", this.addressList.name);
    this.addressForm = this.formBuilder.group({
      address_type: [this.addressList.address_type],
      name: [
        this.addressList.name,
        [Validators.required, Validators.minLength(2)],
      ],
      address_line1: [this.addressList.address_line1, [Validators.required]],
      address_line2: [this.addressList.address_line2, [Validators.required]],
      address_line3: [this.addressList.address_line2, [Validators.required]],
      city: [this.addressList.city, [Validators.required]],
      state: [this.addressList.state],
      country: [this.addressList.country],
      pin: [this.addressList.pin, [Validators.required]],
      phone1: [
        this.addressList.phone1,
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      phone2: [
        this.addressList.phone2,
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      ext: [this.addressList.ext, [Validators.required]],
      fax: [this.addressList.fax],
      mobile: [
        this.addressList.mobile,
        [
          Validators.required,
          Validators.min(1000000000),
          Validators.max(9999999999),
        ],
      ],
      email: [this.addressList.email, [Validators.required]],
    });
  }
  adressFormInitialixation() {
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
      this.id = +params["id"]; // (+) converts string 'id' to a number
      this.addressType = params["name"];
      console.log(params["name"]);
      this.getEmployeeById(this.id);
      console.log(this.id);
    });
  }
  getEmployeeById(id: number) {
    if (id != null) {
      this.employeeService.getEmployeeById(id).subscribe(
        (data) => {
          console.log(data);
          this.employeeData = data;
          console.log(this.employeeData.empId);
          this.empid = this.employeeData.empId;
          this.getEmployeeAddressById(this.employeeData.empId);
          console.log(this.empid);
        },
        (error) => {}
      );
    } else {
    }
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
      empId: this.employeeData.empId,
    };
    // this.employeeService.saveEmployeeAddress(submissionData).subscribe(
    //   (res) => {
    //     this.has_error = false;
    //     console.log(res);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
    console.log(this.empid);
    this.employeeService.updateEmployeeAddressById(submissionData).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
    // console.log("success ", this.registerForm.value);
    this.router.navigate(["/home/employees/list/" + this.id]);
    console.log(this.addressForm.value);
  }
  getEmployeeAddressById(empId: any) {
    console.log(empId);
    this.employeeService
      .getEmployeeAddressById(this.employeeData.empId)
      .subscribe(
        (data) => {
          console.log(data);
          console.log(data.length);
          // if(data.length>0){
          //   for (let addressData of data) {
          //     if (addressData.address_type === this.addressType) {
          //       console.log(addressData);
          //       this.addressList = addressData;
          //       this.addressFormLoad();
          //     }
          //   }
          // }else{
          //   this.adressFormInitialixation();
          // }5
          if (data === undefined) {
            alert("first if");
            this.adressFormInitialixation();
          } else {
            alert("else");
            for (let addressData of data) {
              if (addressData.address_type === this.addressType) {
                console.log(addressData);
                this.addressList = addressData;
                this.addressFormLoad();
              }
            }
          }
          if (this.addressList === undefined) {
            alert("second if");
            this.adressFormInitialixation();
          }
        },
        (error) => {
          console.log(error);
        }
      );
  }
}
