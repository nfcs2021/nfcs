import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css'],
})
export class AddPatientComponent implements OnInit {
  indianFormat = '12345 67890';
  USFormat = '(000) 123-4567';
  ssnNumberFormate = '123-45-6789';
  ssnPlaceholder = this.ssnNumberFormate;
  ssnNumberEntered = '';
  ssnFormateLe: any;
  paceHolder = this.USFormat;
  phoneNumberEntered = '';
  formatLen: any;
  myData: any[] = [];
  patientRegesterForm: FormGroup;
  submitted = false;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  countryId: any;
  today = new Date();
  constructor(
    private http: HttpClient,
    private service: AppService,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private route: Router
  ) {}

  ngOnInit(): void {
    // const phoneInputField = document.querySelector("#phone");
    // const phoneInput = (<any>window).intlTelInput(phoneInputField, {
    //   utilsScript:
    //     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    // });
    this.formInitilization();
    this.getCountries();
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0];
  }
  getCountries() {
    this.service.getCountry().subscribe((data) => {
      console.log(data);
      this.countryInfo = data;
    });
  }

  onPhoneChange(event: any) {
    let getIndexSpecialChar = [];
    let getactualSpecialChar = [];
    for (let i = 0; i < this.paceHolder.length; i++) {
      if (
        this.paceHolder[i] === ' ' ||
        this.paceHolder[i] === '(' ||
        this.paceHolder[i] === ')' ||
        this.paceHolder[i] === '-'
      ) {
        getIndexSpecialChar.push(i);
        getactualSpecialChar.push(this.paceHolder[i]);
      }
    }
    console.log(getactualSpecialChar);
    console.log(getIndexSpecialChar);

    let len = event.target.value.length;
    let backspace = event.keyCode;

    if (backspace === 8) {
      len = len - 1;
    } else {
      len = event.target.value.length;
    }
    let eventTargetValue = event.target.value;
    for (let i = 0; i < this.paceHolder.length; i++) {
      if (len === getIndexSpecialChar[i]) {
        this.phoneNumberEntered = eventTargetValue + getactualSpecialChar[i];
        if (this.phoneNumberEntered.length === getIndexSpecialChar[i + 1]) {
          this.phoneNumberEntered =
            this.phoneNumberEntered + getactualSpecialChar[i + 1];
        }
      }
    }
    console.log(event.target.value);
  }

  onSsnChange(event: any) {
    let getIndexSpecialChar = [];
    let getactualSpecialChar = [];
    for (let i = 0; i < this.ssnPlaceholder.length; i++) {
      if (this.ssnPlaceholder[i] === '-') {
        getIndexSpecialChar.push(i);
        getactualSpecialChar.push(this.ssnPlaceholder[i]);
      }
    }
    console.log(getactualSpecialChar);
    console.log(getIndexSpecialChar);

    let len = event.target.value.length;
    let backspace = event.keyCode;

    if (backspace === 8) {
      len = len - 1;
    } else {
      len = event.target.value.length;
    }
    let eventTargetValue = event.target.value;
    for (let i = 0; i < this.paceHolder.length; i++) {
      if (len === getIndexSpecialChar[i]) {
        this.ssnNumberEntered = eventTargetValue + getactualSpecialChar[i];
        if (this.ssnNumberEntered.length === getIndexSpecialChar[i + 1]) {
          this.ssnNumberEntered =
            this.ssnNumberEntered + getactualSpecialChar[i + 1];
        }
      }
    }
    console.log(event.target.value);
  }

  onChangeCountry(countryValue: any) {
    let countryIso: any;
    for (let data of this.countryInfo) {
      if (countryValue.target.value === data.name) {
        countryIso = data.iso2;
        this.countryId = data.iso2;
      }
    }
    this.service.getStateOfSelectedCountry(countryIso).subscribe((data) => {
      console.log(data);
      this.stateInfo = data;
    });
  }
  onChangeState(stateValue: any) {
    let stateId: any;
    for (let data of this.stateInfo) {
      if (stateValue.target.value === data.name) {
        stateId = data.iso2;
      }
    }
    this.service
      .getCitiesOfSelectedState(this.countryId, stateId)
      .subscribe((data) => {
        console.log(data);
        this.cityInfo = data;
      });
  }
  telInputObject(obj: any) {
    console.log(obj);
    obj.setCountry('in');
  }

  get f() {
    return this.patientRegesterForm.controls;
  }
  formInitilization() {
    this.patientRegesterForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      contactNumber: ['', [Validators.required]],
      email: ['', [Validators.required]],
      socialSecurityNumber: ['', [Validators.required]],
      address1: ['', [Validators.required]],
      address2: ['', []],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipcode: ['', [Validators.required]],
      gender: ['', [Validators.required]],
    });
  }

  onSubmit() {
    console.log(this.patientRegesterForm.value['socialSecurityNumber']);
    this.submitted = true;
    if (this.patientRegesterForm.invalid) {
      return;
    }
    const data={
      "FirstName":this.patientRegesterForm.value['firstName'],
        "LastName": this.patientRegesterForm.value['lastName'],
        "dateofbirth": this.patientRegesterForm.value['dob'],
        "ContactNumber": this.patientRegesterForm.value['contactNumber'],
        "gender": this.patientRegesterForm.value['gender'],
        "emailaddress": this.patientRegesterForm.value['email'],
        "Ssn": this.patientRegesterForm.value['socialSecurityNumber'],
        "AddressLine1": this.patientRegesterForm.value['address1'],
        "AddressLine2": this.patientRegesterForm.value['address2'],
        "country": this.patientRegesterForm.value['country'],
        "state": this.patientRegesterForm.value['state'],
        "city": this.patientRegesterForm.value['city'],
        "Zipcode": this.patientRegesterForm.value['zipcode'],
        "InsuranceNumber": 234567
    }
    // console.log(this.patientRegesterForm.value,event.target.phone.value);

    this.patientService.savePatientData(data).subscribe(
      (data) => {
        console.log(data);
        this.route.navigate(['/patient/data/' + data.id]);
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
