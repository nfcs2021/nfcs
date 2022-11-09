import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { FrontdeskService } from '../../services/frontdesk.service';
import { fileTypeValidator } from '../validators/password-validators';


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
  frontDeskId: any;
  updateData: boolean;
  frontDeskDataById: any;
  existedUserName: any = new Array();
  createdBy: any;
  frontdeskData: any;
  file: any;
  email: any;
  popup = false;
  simillarFrontdeskData: any;
  employeeIdDoc: any;
  idproofdoc: any;
  profileImageDoc: any;
  heading: string;
  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private route: Router,
    private authService: AuthService,
    private router: ActivatedRoute,
    private dataService: DataService,
    private frontdeskService: FrontdeskService,
    private adminService:AdminService
  ) {}

  ngOnInit(): void {
    // this.getFrontdeskData();
    this.formInitilization();
    this.getCountries();
    this.frontDeskData();
    this.createdBy = localStorage.getItem('createdBy');
    this.frontDeskId = this.router.snapshot.paramMap.get('id');

    if (this.frontDeskId) {
      this.getForntDeskDataById(this.router.snapshot.paramMap.get('id'));
      this.updateData = true;
    }
  }




  frontDeskData() {
    this.authService.getAllRegistrationData().subscribe(
      (data) => {
        console.log(data);
        for (let singledata of data) {
          this.existedUserName.push(singledata.User_Name);
        }
        console.log(this.existedUserName);
      },
      (err) => {
        console.log(err);
      }
    );
    }
   
  

  getForntDeskDataById(id: any) {
    this.adminService.getAdminData(id).subscribe(
      (data) => {
        this.frontDeskDataById = data;
        this.onChangeCountryUpdateData(data.Country);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onChangeCountryUpdateData(countryValue: any) {
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
        this.updateFrontDeskRegistrationForm();
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

  employeeIdDocument(event: any) {
    this.employeeIdDoc = event.srcElement.files[0];
    console.log(this.employeeIdDoc);
  }
  idProofDocument(event: any) {
    this.idproofdoc = event.srcElement.files[0];
    console.log(this.idproofdoc);
  }
  profileImageDocument(event: any) {
    this.profileImageDoc = event.srcElement.files[0];
    console.log(this.profileImageDoc);
  }
  get f() {
    return this.frontDeskRegesterForm.controls;
  }
  formInitilization() {
    this.heading = 'Add New Front Desk Employee';
    this.frontDeskRegesterForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z]+$')]],
        lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
        userName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
        dob: ['', [Validators.required]],
        contactNumber: ['', [Validators.required,Validators.pattern('^[0-9 ()-]+$')]],
        email: ['', [Validators.required]],
        socialSecurityNumber: ['', [Validators.required,Validators.pattern('^[0-9 ()-]+$')]],
        address1: ['', [Validators.required]],
        address2: ['', []],
        country: ['', [Validators.required]],
        state: ['', [Validators.required]],
        city: ['', [Validators.required]],
        zipcode: ['', [Validators.required,Validators.pattern('^[0-9]+$')]],
        gender: ['', [Validators.required]],
        pcp: ['', [Validators.required]],
        employeePostion: ['', [Validators.required]],
        immediateManager: ['', [Validators.required]],
        employeeId: ['', [Validators.required]],
        employeeIdDocument: [''],
        idproof: [''],
        profileImage: ['',fileTypeValidator()],
        createBy: [''],
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
        [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z]+$')],
      ],
      lastName: [this.frontDeskDataById.Last_Name, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      userName: [this.frontDeskDataById.User_Name, [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
      dob: [this.frontDeskDataById.Date_of_birth, [Validators.required]],
      contactNumber: [
        this.frontDeskDataById.Contact_number,
        [Validators.required,Validators.pattern('^[0-9 ()-]+$')]
      ],
      email: [this.frontDeskDataById.Email, [Validators.required]],
      socialSecurityNumber: [this.frontDeskDataById.Ssn, [Validators.required,Validators.pattern('^[0-9 ()-]+$')]],
      address1: [this.frontDeskDataById.Address_Line1, [Validators.required]],
      address2: [this.frontDeskDataById.Address_Line2, []],
      country: [this.frontDeskDataById.Country, [Validators.required]],
      state: [this.frontDeskDataById.State, [Validators.required]],
      city: [this.frontDeskDataById.City, [Validators.required]],
      zipcode: [this.frontDeskDataById.Zipcode, [Validators.required,Validators.pattern('^[0-9 ()-]+$')]],
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
      profileImage: [this.frontDeskDataById.Profile_image]
    });
  }

  updateRegistrationData() {
    this.submitted = true;
    if (this.frontDeskRegesterForm.invalid) {
      return;
    }
    const data = {
      First_Name: this.frontDeskRegesterForm.value['firstName'],
      Last_Name: this.frontDeskRegesterForm.value['lastName'],
      User_Name: this.frontDeskRegesterForm.value['userName'],
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
        this.heading = 'Update Registration From';
        this.route.navigate(['/frontdesk/frontdetails/' + data.id]);
      },
      (err) => {
        console.log(err);
      }
    );
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

  savefrondeskData() {
    const fileData2 = new FormData();
    fileData2.append(
      'First_Name',
      this.frontDeskRegesterForm.value['firstName']
    );
    fileData2.append('Last_Name', this.frontDeskRegesterForm.value['lastName']);
    fileData2.append('User_Name', this.frontDeskRegesterForm.value['userName']);
    fileData2.append('Date_of_birth', this.frontDeskRegesterForm.value['dob']);
    fileData2.append(
      'Contact_number',
      this.frontDeskRegesterForm.value['contactNumber']
    );
    fileData2.append('Gender', this.frontDeskRegesterForm.value['gender']);
    fileData2.append('Email', this.frontDeskRegesterForm.value['email']);
    fileData2.append(
      'Ssn',
      this.frontDeskRegesterForm.value['socialSecurityNumber']
    );
    fileData2.append(
      'Address_Line1',
      this.frontDeskRegesterForm.value['address1']
    );
    fileData2.append(
      'Address_Line2',
      this.frontDeskRegesterForm.value['address2']
    );
    fileData2.append('Country', this.frontDeskRegesterForm.value['country']);
    fileData2.append('State', this.frontDeskRegesterForm.value['state']);
    fileData2.append('City', this.frontDeskRegesterForm.value['city']);
    fileData2.append('Zipcode', this.frontDeskRegesterForm.value['zipcode']);
    fileData2.append('PCP_Name', this.frontDeskRegesterForm.value['pcp']);
    fileData2.append(
      'Emp_designation',
      this.frontDeskRegesterForm.value['employeePostion']
    );
    fileData2.append(
      'Immidiate_manager',
      this.frontDeskRegesterForm.value['immediateManager']
    );
    fileData2.append('Emp_id', this.frontDeskRegesterForm.value['employeeId']);
    fileData2.append('Emp_id_doc', this.employeeIdDoc);
    fileData2.append('Id_proof', this.idproofdoc);
    fileData2.append('Profile_image', this.profileImageDoc);
    fileData2.append('Created_by', this.createdBy);
    fileData2.append('Last_updated_by', this.createdBy);
    console.log(fileData2);
    this.authService.saveFrontDeskData(fileData2).subscribe(
      (res) => {
        console.log(res);

        this.route.navigate(['/frontdesk/frontdetails/' + res.data.id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  userNameValidation(UserName: string) {
    return (formGroup: FormGroup) => {
      let matchingControl = formGroup.controls[UserName];
      if (
        matchingControl.errors &&
        !matchingControl.errors?.['UserNameValidator']
      ) {
        return;
      }
      for (let control of this.existedUserName) {
        if (control === matchingControl.value) {
          matchingControl.setErrors({ UserNameValidator: true });
          break;
        } else {
          matchingControl.setErrors(null);
        }
      }
    };
  }
}