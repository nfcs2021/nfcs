import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { AppService } from '../../services/app.service';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  popup = false;
  indianFormat = '12345 67890';
  USFormat = '(000) 123-4567'
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
  patientData: any;
  simillarPatientData: any;
  patientDataById: any;
  patientId: string | null;
  updateData: boolean;
  constructor(private http: HttpClient,
    private service: AppService,
    private formBuilder: FormBuilder,
    private patientService: PatientService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit(): void {

    // const phoneInputField = document.querySelector("#phone");
    // const phoneInput = (<any>window).intlTelInput(phoneInputField, {
    //   utilsScript:
    //     "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    // });
    this.formInitilization();
    this.getCountries();
    this.patientId = this.router.snapshot.paramMap.get('id')

    if (this.patientId) {
      this.getByPatientId(this.router.snapshot.paramMap.get('id'));
      this.updateData = true;
    }


  }

  getByPatientId(id: any) {
    this.patientService.getPatientDataById(id).subscribe(
      data => {
        console.log(data);
        this.patientDataById = data;
        this.formUpdation();
        this.onChangeCountryUpdateData(data.Country);

<<<<<<< HEAD
      }, err => {
=======
      },err =>{
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
        console.log(err);

      }
    );
  }

  getToday(): string {
    return new Date().toISOString().split('T')[0]
  }
  getCountries() {
    this.service.getCountry().subscribe(
      data => {
        console.log(data);
        this.countryInfo = data

      }
    )
  }

  onPhoneChange(event: any) {

    let getIndexSpecialChar = [];
    let getactualSpecialChar = [];
    for (let i = 0; i < this.paceHolder.length; i++) {
      if (this.paceHolder[i] === ' ' || this.paceHolder[i] === '(' || this.paceHolder[i] === ')' || this.paceHolder[i] === '-') {
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
    let eventTargetValue = event.target.value
    for (let i = 0; i < this.paceHolder.length; i++) {
      if (len === getIndexSpecialChar[i]) {
        this.phoneNumberEntered = eventTargetValue + getactualSpecialChar[i];
        if (this.phoneNumberEntered.length === getIndexSpecialChar[i + 1]) {
          this.phoneNumberEntered = this.phoneNumberEntered + getactualSpecialChar[i + 1];
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
    let eventTargetValue = event.target.value
    for (let i = 0; i < this.paceHolder.length; i++) {
      if (len === getIndexSpecialChar[i]) {
        this.ssnNumberEntered = eventTargetValue + getactualSpecialChar[i];
        if (this.ssnNumberEntered.length === getIndexSpecialChar[i + 1]) {
          this.ssnNumberEntered = this.ssnNumberEntered + getactualSpecialChar[i + 1];
        }
      }

    }
    console.log(event.target.value);

  }

  onChangeCountry(countryValue: any) {
    let countryIso: any;
    for (let data of this.countryInfo) {
      if (countryValue.target.value === data.name) {

        countryIso = data.iso2
        this.countryId = data.iso2
      }
    }
    this.service.getStateOfSelectedCountry(countryIso).subscribe(
      data => {
        console.log(data);
        this.stateInfo = data;

      }
    )

  }
  onChangeCountryUpdateData(countryValue: any) {
    alert(countryValue)
    let countryIso: any;
    for (let data of this.countryInfo) {
      if (countryValue === data.name) {
        countryIso = data.iso2
        this.countryId = data.iso2
      }
    }
    this.service.getStateOfSelectedCountry(countryIso).subscribe(
      data => {
        console.log(data);
        this.stateInfo = data;
        this.onChangeStateUpdateData(this.patientDataById.State);
      }
    )

  }

  onChangeStateUpdateData(stateValue: any) {
    alert(stateValue)
    let stateId: any;
    for (let data of this.stateInfo) {
      if (stateValue === data.name) {
        stateId = data.iso2
      }
    }
    this.service.getCitiesOfSelectedState(this.countryId, stateId).subscribe(
      data => {
        console.log(data);
        this.cityInfo = data;

      }
    )
  }

  onChangeState(stateValue: any) {
    let stateId: any;
    for (let data of this.stateInfo) {
      if (stateValue.target.value === data.name) {
        stateId = data.iso2
      }
    }
    this.service.getCitiesOfSelectedState(this.countryId, stateId).subscribe(
      data => {
        console.log(data);
        this.cityInfo = data;

      }
    )
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
      firstName: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      lastName: ['',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      dob: ['',
      [
        Validators.required
      ]],
      contactNumber: ['',
      [
        Validators.required,
        Validators.pattern('^[0-9 ()-]+$')
      ]],
      email: ['',
      [
        Validators.required
      ]],
      socialSecurityNumber: ['',
      [
        Validators.required,
        Validators.pattern('^[0-9 -]+$')
      ]],
      address1: ['', [Validators.required]],
      address2: ['', []],
      country: ['', [Validators.required]],
      state: ['', [Validators.required]],
      city: ['', [Validators.required]],
      zipcode: ['',
      [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      gender: ['', [Validators.required]]
    });
  }
  formUpdation() {
    this.patientRegesterForm = this.formBuilder.group({
      firstName: [this.patientDataById.First_Name,
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      lastName: [this.patientDataById.Last_Name,
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      dob: [this.patientDataById.Date_of_birth,
      [
        Validators.required
      ]],
      contactNumber: [this.patientDataById.Contact_Number,
      [
        Validators.required,
        Validators.pattern('^[0-9 ()-]+$')
      ]],
      email: [this.patientDataById.Email_address,
      [
        Validators.required
      ]],
      socialSecurityNumber: [this.patientDataById.Ssn,
      [
        Validators.required,
        Validators.pattern('^[0-9 -]+$')
      ]],
      address1: [this.patientDataById.Address_Line1,
      [
        Validators.required
      ]],
      address2: [this.patientDataById.Address_Line2,
      [

      ]],
      country: [this.patientDataById.Country,
      [
        Validators.required
      ]],
      state: [this.patientDataById.State,
      [
        Validators.required
      ]],
      city: [this.patientDataById.City,
      [
        Validators.required
      ]],
      zipcode: [this.patientDataById.Zipcode,
      [
        Validators.required,
        Validators.pattern('^[0-9]+$')
      ]],
      gender: [this.patientDataById.Gender,
      [
        Validators.required
      ]]
    });
  }
  getAllPatientsData() {
    this.patientService.getAllPatientsData().subscribe(
      data => {
        console.log(data);
        this.patientData = data;
        for (let patient of this.patientData) {
          if (patient.First_Name === this.patientRegesterForm.value['firstName'] && patient.Last_Name === this.patientRegesterForm.value['lastName'] && patient.Date_of_birth === this.patientRegesterForm.value['dob']) {
            this.popup = true;
            this.simillarPatientData = patient;
            break;
          }
        }
<<<<<<< HEAD
        if (!this.simillarPatientData) {
          this.savePatient();
        }
      }, err => {
=======
        if(!this.simillarPatientData){
         this.savePatient();
        }
      },err =>{
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
        console.log(err);
      });
  }
  onSubmit(event: any) {
    this.submitted = true;
    // // stop here if form is invalid
    if (this.patientRegesterForm.invalid) {
      return;
    }
    this.getAllPatientsData();
  }

  savePatient() {
    console.log(this.patientRegesterForm.value);

    // console.log(this.patientRegesterForm.value['socialSecurityNumber']);

    // this.submitted = true;
    // // stop here if form is invalid
    // if (this.patientRegesterForm.invalid) {
    //   return;
    // }
    const data = {
      "First_Name": this.patientRegesterForm.value['firstName'],
      "Last_Name": this.patientRegesterForm.value['lastName'],
      "Date_of_birth": this.patientRegesterForm.value['dob'],
      "Contact_Number": this.patientRegesterForm.value['contactNumber'],
      "Gender": this.patientRegesterForm.value['gender'],
      "Email_address": this.patientRegesterForm.value['email'],
      "Ssn": this.patientRegesterForm.value['socialSecurityNumber'],
      "Address_Line1": this.patientRegesterForm.value['address1'],
      "Address_Line2": this.patientRegesterForm.value['address2'],
      "Country": this.patientRegesterForm.value['country'],
      "State": this.patientRegesterForm.value['state'],
      "City": this.patientRegesterForm.value['city'],
      "Zipcode": this.patientRegesterForm.value['zipcode'],
      "Insurance_Number": 234567,
      "Created_by": localStorage.getItem('name')
    }
    this.patientService.savePatientData(data).subscribe(
      data => {
        console.log(data);
<<<<<<< HEAD
        this.route.navigate(['/patient/data/' + data.id])
=======
        this.route.navigate(['/patient/data/'+data.id])
        alert(data.id)
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
      }, error => {
        console.log(error);

      }
    )
  }
<<<<<<< HEAD
  update() {
    const data = {
      "First_Name": this.patientRegesterForm.value['firstName'],
      "Last_Name": this.patientRegesterForm.value['lastName'],
      "Date_of_birth": this.patientRegesterForm.value['dob'],
      "Contact_Number": this.patientRegesterForm.value['contactNumber'],
      "Gender": this.patientRegesterForm.value['gender'],
      "Email_address": this.patientRegesterForm.value['email'],
      "Ssn": this.patientRegesterForm.value['socialSecurityNumber'],
      "Address_Line1": this.patientRegesterForm.value['address1'],
      "Address_Line2": this.patientRegesterForm.value['address2'],
      "Country": this.patientRegesterForm.value['country'],
      "State": this.patientRegesterForm.value['state'],
      "City": this.patientRegesterForm.value['city'],
      "Zipcode": this.patientRegesterForm.value['zipcode'],
      "Insurance_Number": 234567,
      "Created_by": localStorage.getItem('name')
=======
  update(){
    const data={
      "First_Name":this.patientRegesterForm.value['firstName'],
        "Last_Name": this.patientRegesterForm.value['lastName'],
        "Date_of_birth": this.patientRegesterForm.value['dob'],
        "Contact_Number": this.patientRegesterForm.value['contactNumber'],
        "Gender": this.patientRegesterForm.value['gender'],
        "Email_address": this.patientRegesterForm.value['email'],
        "Ssn": this.patientRegesterForm.value['socialSecurityNumber'],
        "Address_Line1": this.patientRegesterForm.value['address1'],
        "Address_Line2": this.patientRegesterForm.value['address2'],
        "Country": this.patientRegesterForm.value['country'],
        "State": this.patientRegesterForm.value['state'],
        "City": this.patientRegesterForm.value['city'],
        "Zipcode": this.patientRegesterForm.value['zipcode'],
        "Insurance_Number": 234567,
        "Created_by":localStorage.getItem('name')
  }
  console.log(data);
  this.patientService.updatePatientData(data,this.patientId).subscribe(
    data =>{
      console.log(data);
       this.route.navigate(['patient/nav'])
    },err =>{
      console.log(err);

>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
    }

    )
  }
}
