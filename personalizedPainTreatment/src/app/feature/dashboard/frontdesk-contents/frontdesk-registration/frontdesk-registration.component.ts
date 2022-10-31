import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
<<<<<<< HEAD
import { FrontdeskService } from '../../services/frontdesk.service';
=======
import { PatientService } from '../../services/patient.service';
<<<<<<< HEAD
=======

>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa

@Component({
  selector: 'app-frontdesk-registration',
  templateUrl: './frontdesk-registration.component.html',
  styleUrls: ['./frontdesk-registration.component.css'],
})
export class FrontdeskRegistrationComponent implements OnInit {
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
  frontDeskRegesterForm: FormGroup;
  submitted = false;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  countryId: any;
  today = new Date();
<<<<<<< HEAD
  frontDeskId: any;
  updateData: boolean;
  frontDeskDataById: any;
  existedUserName:any=new Array();
=======
  createdBy: any;
  frontDeskDataById: any;
<<<<<<< HEAD
  frontDeskId: any;
  updateData: boolean;
  frontdeskData: any;
  file: any;
  email: any;
  popup = false;
  simillarFrontdeskData: any;
=======
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: AuthService,
<<<<<<< HEAD
    private router: ActivatedRoute,
    private dataService: DataService,
    private frontdeskService: FrontdeskService
=======
<<<<<<< HEAD
    private router:ActivatedRoute,
=======
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
    private dataService:DataService
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
  ) {}

  ngOnInit(): void {
    // this.getFrontdeskData();
    this.formInitilization();
    this.getCountries();
<<<<<<< HEAD
    this.frontDeskData();

    this.frontDeskId = this.router.snapshot.paramMap.get('id')

    if (this.frontDeskId) {
      this.getForntDeskDataById(this.router.snapshot.paramMap.get('id'));
      this.updateData = true;
    }
  }
  frontDeskData(){
    this.authService.getAllRegistrationData().subscribe(
      data =>{
        console.log(data);
        for(let singledata of data)
        {

          this.existedUserName.push(singledata .UserName);
        }
        console.log(this.existedUserName);
      },
      err =>{
        console.log(err);
        
      }
    )
    
=======
    alert(localStorage.getItem('createdBy'));
    this.createdBy = localStorage.getItem('createdBy');
<<<<<<< HEAD
    this.frontDeskId = this.router.snapshot.paramMap.get('id');

    if (this.frontDeskId) {
      this.getForntDeskDataById(this.router.snapshot.paramMap.get('id'));
      this.updateData = true;
    }
=======
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
  }

  getForntDeskDataById(id: any) {
    this.dataService.getUserData(id).subscribe(
      (data) => {
        console.log(data);
        this.frontDeskDataById = data;
        this.updateFrontDeskRegistrationForm();
        this.onChangeCountryUpdateData(data.Country);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onChangeCountryUpdateData(countryValue: any) {
    alert(countryValue);
    alert(this.frontDeskDataById.State);
    let countryIso: any;
    for (let data of this.countryInfo) {
      if (countryValue === data.name) {
        countryIso = data.iso2;
        this.countryId = data.iso2;
      }
    }
    this.service.getStateOfSelectedCountry(countryIso).subscribe((data) => {
      console.log(data);
      this.stateInfo = data;
      this.onChangeStateUpdateData(this.frontDeskDataById.State);
    });
  }

  onChangeStateUpdateData(stateValue: any) {
    alert(stateValue);
    let stateId: any;
    for (let data of this.stateInfo) {
      if (stateValue === data.name) {
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
    return this.frontDeskRegesterForm.controls;
  }
  formInitilization() {
    this.frontDeskRegesterForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2)]],
        lastName: ['', [Validators.required]],
        userName: ['', [Validators.required]],
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
        pcp: ['', [Validators.required]],
        employeePostion: ['', [Validators.required]],
        immediateManager: ['', [Validators.required]],
        employeeId: ['', [Validators.required]],
        employeeIdDocument: [''],
        idproof: [''],
        profileImage: [''],
        // password: ['', Validators.required],
        createBy: [''],
        // confirmPassword: ['', Validators.required],
      },
      // {
      //   validator: this.ConfirmPasswordValidator('password', 'confirmPassword'),
      // }
       {
      validator: this.userNameValidation('userName'),
       }
    );
  }

  updateFrontDeskRegistrationForm() {
    this.frontDeskRegesterForm = this.formBuilder.group({
      firstName: [
        this.frontDeskDataById.First_Name,
        [Validators.required, Validators.minLength(2)],
      ],
      lastName: [this.frontDeskDataById.Last_Name, [Validators.required]],
      dob: [this.frontDeskDataById.Date_of_birth, [Validators.required]],
      contactNumber: [
        this.frontDeskDataById.Contact_number,
        [Validators.required],
      ],
      email: [this.frontDeskDataById.Email, [Validators.required]],
      socialSecurityNumber: [this.frontDeskDataById.Ssn, [Validators.required]],
      address1: [this.frontDeskDataById.Address_Line1, [Validators.required]],
      address2: [this.frontDeskDataById.Address_Line2, []],
      country: [this.frontDeskDataById.Country, [Validators.required]],
      state: [this.frontDeskDataById.State, [Validators.required]],
      city: [this.frontDeskDataById.City, [Validators.required]],
      zipcode: [this.frontDeskDataById.Zipcode, [Validators.required]],
      gender: [this.frontDeskDataById.Gender, [Validators.required]],
      pcp: [this.frontDeskDataById.PCP_Name, [Validators.required]],
      employeePostion: [
        this.frontDeskDataById.Emp_designation,
        [Validators.required],
      ],
      immediateManager: [
        this.frontDeskDataById.Immidiate_manager,
        [Validators.required],
      ],
      employeeId: [this.frontDeskDataById.Emp_id, [Validators.required]],
      employeeIdDocument: [this.frontDeskDataById.Emp_id_doc],
      idproof: [this.frontDeskDataById.Id_proof],
      profileImage: [this.frontDeskDataById.Profile_image],
    });
  }

  updateRegistrationData() {
    const data = {
      First_Name: this.frontDeskRegesterForm.value['firstName'],
      Last_Name: this.frontDeskRegesterForm.value['lastName'],
      Date_of_birth: this.frontDeskRegesterForm.value['dob'],
      Contact_number: this.frontDeskRegesterForm.value['contactNumber'],
      Gender: this.frontDeskRegesterForm.value['gender'],
      Email: this.frontDeskRegesterForm.value['email'],
      Ssn: this.frontDeskRegesterForm.value['socialSecurityNumber'],
      Address_Line1: this.frontDeskRegesterForm.value['address1'],
      Address_Line2: this.frontDeskRegesterForm.value['address2'],
      Country: this.frontDeskRegesterForm.value['country'],
      State: this.frontDeskRegesterForm.value['state'],
      City: this.frontDeskRegesterForm.value['city'],
      Zipcode: this.frontDeskRegesterForm.value['zipcode'],
      PCP_Name: this.frontDeskRegesterForm.value['pcp'],
      Emp_designation: this.frontDeskRegesterForm.value['employeePostion'],
      Immidiate_manager: this.frontDeskRegesterForm.value['immediateManager'],
      Emp_id: this.frontDeskRegesterForm.value['employeeId'],
      Emp_id_doc: this.frontDeskRegesterForm.value['employeeIdDocument'],
      Id_proof: this.frontDeskRegesterForm.value['idproof'],
      Profile_image: this.frontDeskRegesterForm.value['profileImage'],
      Password: this.frontDeskRegesterForm.value['password'],
      confirmPassword: this.frontDeskRegesterForm.value['confirmPassword'],
      Created_by: this.createdBy,
    };
    console.log(data);
    this.frontdeskService.updateFrontdeskData(data, this.frontDeskId).subscribe(
      (data) => {
        console.log(data);
        this.route.navigate(['/frontdesk/frontdetails/' + data.id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  upload(fakepath: any) {
    var splits = fakepath.split('fakepath\\');
    alert(splits[1]);
  }
  getFrontdeskData() {
    // alert(1);
    this.authService.getAllRegistrationData().subscribe(
      (data) => {
        console.log('getuserdata:', data);
        this.frontdeskData = data;
        for (let frontdeskUser of this.frontdeskData) {
          if (
            frontdeskUser.First_Name ===
              this.frontDeskRegesterForm.value['firstName'] &&
            frontdeskUser.Last_Name ===
              this.frontDeskRegesterForm.value['lastName'] &&
            frontdeskUser.Date_of_birth ===
              this.frontDeskRegesterForm.value['dob']
          ) {
            this.popup = true;
            this.simillarFrontdeskData = frontdeskUser;
            break;
          }
        }
        if (!this.simillarFrontdeskData) {
          this.savefrondeskData();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.frontDeskRegesterForm.value['socialSecurityNumber']);
    this.submitted = true;
    if (this.frontDeskRegesterForm.invalid) {
      return;
    }
    this.getFrontdeskData();
  }
  ConfirmPasswordValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[password];
      let matchingControl = formGroup.controls[confirmPassword];
      if (
        matchingControl.errors &&
        !matchingControl.errors?.['confirmPasswordValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

  savefrondeskData() {
    const data = {
      First_Name: this.frontDeskRegesterForm.value['firstName'],
      Last_Name: this.frontDeskRegesterForm.value['lastName'],
      UserName: this.frontDeskRegesterForm.value['userName'],
      Date_of_birth: this.frontDeskRegesterForm.value['dob'],
      Contact_number: this.frontDeskRegesterForm.value['contactNumber'],
      Gender: this.frontDeskRegesterForm.value['gender'],
      Email: this.frontDeskRegesterForm.value['email'],
      Ssn: this.frontDeskRegesterForm.value['socialSecurityNumber'],
      Address_Line1: this.frontDeskRegesterForm.value['address1'],
      Address_Line2: this.frontDeskRegesterForm.value['address2'],
      Country: this.frontDeskRegesterForm.value['country'],
      State: this.frontDeskRegesterForm.value['state'],
      City: this.frontDeskRegesterForm.value['city'],
      Zipcode: this.frontDeskRegesterForm.value['zipcode'],
      PCP_Name: this.frontDeskRegesterForm.value['pcp'],
      Emp_designation: this.frontDeskRegesterForm.value['employeePostion'],
      Immidiate_manager: this.frontDeskRegesterForm.value['immediateManager'],
      Emp_id: this.frontDeskRegesterForm.value['employeeId'],
      Emp_id_doc: this.frontDeskRegesterForm.value['employeeIdDocument'],
      Id_proof: this.frontDeskRegesterForm.value['idproof'],
      Profile_image: this.frontDeskRegesterForm.value['profileImage'],
      Password: this.frontDeskRegesterForm.value['password'],
      confirmPassword: this.frontDeskRegesterForm.value['confirmPassword'],
<<<<<<< HEAD
      Created_by: localStorage.getItem('name'),
=======
      Created_by: this.createdBy,
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
    };
    this.authService.saveFrontDeskData(data).subscribe(
      (data) => {
        console.log('frontdeskData :', data);
        this.route.navigate(['/frontdesk/frontdetails/' + data.data.id]);
        alert(data.data.First_Name);
      },
      (error) => {
        console.log(error);
      }
    );
  }
<<<<<<< HEAD
=======
  ConfirmPasswordValidator(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[password];
      let matchingControl = formGroup.controls[confirmPassword];
      if (
        matchingControl.errors &&
        !matchingControl.errors?.['confirmPasswordValidator']
      ) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ confirmPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
  }
<<<<<<< HEAD

  userNameValidation(UserName: string) {
    return (formGroup: FormGroup) => {
      let matchingControl = formGroup.controls[UserName];
      if (
        matchingControl.errors &&
        !matchingControl.errors?.['UserNameValidator']
      ) {
        return;
      }
      for(let control of this.existedUserName)
      {
        if (control === matchingControl.value) {
          matchingControl.setErrors({ UserNameValidator: true });
          break;
        } else {
          matchingControl.setErrors(null);
        }
      }
      
    };
  }

=======
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
}
