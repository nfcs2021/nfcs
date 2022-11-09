import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { AppService } from '../../services/app.service';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { FrontdeskService } from '../../services/frontdesk.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {

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
  adminRegesterForm: FormGroup;
  submitted = false;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  countryId: any;
  today = new Date();
  adminId: any;
  updateData: boolean;
  adminDataById: any;
  existedUserName:any=new Array();
  createdBy: any;
  adminData: any;
  file: any;
  email: any;
  popup = false;
  simillarAdminData: any;
  SelectImage: any;
  employeeIdDoc: any;
  idproofdoc: any;
  profileImageDoc: any;
  tracking:any;
  constructor(
    private service: AppService,
    private formBuilder: FormBuilder,
    private route: Router,
    private adminService: AdminService,
    private router: ActivatedRoute,
    private dataService: DataService,
    private frontdeskService: FrontdeskService
  ) {}

  ngOnInit(): void {
    // this.getFrontdeskData();
    this.formInitilization();
    this.getCountries();
    this.getAllAdminData();

    this.adminId = this.router.snapshot.paramMap.get('id')

    if (this.adminId) {
      alert("1")
      this.getAdminDataById(this.router.snapshot.paramMap.get('id'));
      this.updateData = true;
      
    }
  }
  getAllAdminData(){
    this.adminService.getAllRegistrationData().subscribe(
      data =>{
        console.log(data);
        for(let singledata of data)
        {

          this.existedUserName.push(singledata .User_Name);
        }
        console.log(this.existedUserName);
      },
      err =>{
        console.log(err);
        
      }
    )

    this.createdBy = localStorage.getItem('createdBy');

    this.adminId = this.router.snapshot.paramMap.get('id');

    if (this.adminId) {
      this.getAdminDataById(this.router.snapshot.paramMap.get('id'));
      this.updateData = true;
    }
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
  getAdminDataById(id: any) {
    this.adminService.getAdminData(id).subscribe(
      (data) => {
        console.log(data);
        this.adminDataById = data;
         this.onChangeCountryUpdateData(data.Country);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  onChangeCountryUpdateData(countryValue: any) {
    alert(countryValue)
    let countryIso: any;
    for (let data of this.countryInfo) {
      if (countryValue===data.name) {
        countryIso = data.iso2;
        this.countryId = data.iso2;
        console.log(this.countryId);
        
      }
    }
    this.service.getStateOfSelectedCountry(this.countryId).subscribe((data) => {
      console.log("selected country",data);
      this.stateInfo = data;
      this.onChangeStateUpdateData(this.adminDataById.State);
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
        this.tracking = setInterval(() => {
          this.updateFrontDeskRegistrationForm();
      }, 1000);
         
      });
    
  }
  show(){
    let imageBinary = `data:application/pdf;base64,${this.adminDataById.Emp_id_doc}`;
    window.open(imageBinary);
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
    this.service.getStateOfSelectedCountry(this.countryId).subscribe((data) => {
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
    return this.adminRegesterForm.controls;
  }
  formInitilization() {
    this.adminRegesterForm = this.formBuilder.group(
      {
        firstName: ['', [Validators.required, Validators.minLength(2),Validators.pattern('^[a-zA-Z]+$')]],
        lastName: ['', [Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
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
        zipcode: ['', [Validators.required,Validators.pattern('^[0-9 ()-]+$')]],
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
    clearInterval(this.tracking);
    this.tracking = null;
    let imageBinary = this.adminDataById.Profile_image;
    this.adminRegesterForm = this.formBuilder.group({
      firstName: [
        this.adminDataById.First_Name,
        [Validators.required, Validators.minLength(2)],
      ],
      lastName: [this.adminDataById.Last_Name, [Validators.required]],
      dob: [this.adminDataById.Date_of_birth, [Validators.required]],
      contactNumber: [
        this.adminDataById.Contact_number,
        [Validators.required],
      ],
      email: [this.adminDataById.Email, [Validators.required]],
      socialSecurityNumber: [this.adminDataById.Ssn, [Validators.required]],
      address1: [this.adminDataById.Address_Line1, [Validators.required]],
      address2: [this.adminDataById.Address_Line2, []],
      country: [this.adminDataById.Country, [Validators.required]],
      state: [this.adminDataById.State, [Validators.required]],
      city: [this.adminDataById.City, [Validators.required]],
      zipcode: [this.adminDataById.Zipcode, [Validators.required]],
      gender: [this.adminDataById.Gender, [Validators.required]],
      pcp: [this.adminDataById.PCP_Name, [Validators.required]],
      employeePostion: [
        this.adminDataById.Emp_designation,
        [Validators.required],
      ],
      immediateManager: [
        this.adminDataById.Immidiate_manager,
        [Validators.required],
      ],
      employeeId: [this.adminDataById.Emp_id, [Validators.required]],
      employeeIdDocument: [this.adminDataById.Emp_id_doc],
      idproof: [this.adminDataById.Id_proof],
      profileImage: [this.adminDataById.profileImage_Name],
    });

  }

  updateRegistrationData() {
    const data = {
      First_Name: this.adminRegesterForm.value['firstName'],
      Last_Name: this.adminRegesterForm.value['lastName'],
      User_Name: this.adminRegesterForm.value['userName'],
      Date_of_birth: this.adminRegesterForm.value['dob'],
      Contact_number: this.adminRegesterForm.value['contactNumber'],
      Gender: this.adminRegesterForm.value['gender'],
      Email: this.adminRegesterForm.value['email'],
      Ssn: this.adminRegesterForm.value['socialSecurityNumber'],
      Address_Line1: this.adminRegesterForm.value['address1'],
      Address_Line2: this.adminRegesterForm.value['address2'],
      Country: this.adminRegesterForm.value['country'],
      State: this.adminRegesterForm.value['state'],
      City: this.adminRegesterForm.value['city'],
      Zipcode: this.adminRegesterForm.value['zipcode'],
      PCP_Name: this.adminRegesterForm.value['pcp'],
      Emp_designation: this.adminRegesterForm.value['employeePostion'],
      Immidiate_manager: this.adminRegesterForm.value['immediateManager'],
      Emp_id: this.adminRegesterForm.value['employeeId'],
      Emp_id_doc: this.adminRegesterForm.value['employeeIdDocument'],
      Id_proof: this.adminRegesterForm.value['idproof'],
      Profile_image: this.adminRegesterForm.value['profileImage'],
      Password: this.adminRegesterForm.value['password'],
      confirmPassword: this.adminRegesterForm.value['confirmPassword'],
      Created_by: this.createdBy,
    };
    console.log(data);
    this.frontdeskService.updateFrontdeskData(data, this.adminId).subscribe(
      (data) => {
        console.log(data);
        this.route.navigate(['/frontdesk/frontdetails/' + data.id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
  
  getAdminData() {
    // alert(1);
    this.adminService.getAllRegistrationData().subscribe(
      (data) => {
        console.log('getuserdata:', data);
        this.adminData = data;
        for (let adminUser of this.adminData) {
          if (
            adminUser.First_Name ===
              this.adminRegesterForm.value['firstName'] &&
            adminUser.Last_Name ===
              this.adminRegesterForm.value['lastName'] &&
            adminUser.Date_of_birth ===
              this.adminRegesterForm.value['dob']
          ) {
            this.popup = true;
            this.simillarAdminData = adminUser;
            break;
          }
        }
        if (!this.simillarAdminData) {
          this.savefrondeskData();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }

  onSubmit() {
    console.log(this.adminRegesterForm.value['socialSecurityNumber']);
    this.submitted = true;
    if (this.adminRegesterForm.invalid) {
      return;
    }
    this.getAdminData();
  }
  

  savefrondeskData() {
  //   const fileData = new FormData();
  // fileData.append('Emp_id_doc', this.SelectImage);

  // const fileData1 = new FormData();
  // fileData1.append('Id_proof', this.SelectImage);

  const fileData2 = new FormData();
  fileData2.append('First_Name', this.adminRegesterForm.value['firstName']);
  fileData2.append('Last_Name', this.adminRegesterForm.value['lastName']);
  fileData2.append('User_Name', this.adminRegesterForm.value['userName']);
  fileData2.append('Date_of_birth', this.adminRegesterForm.value['dob']);
  fileData2.append('Contact_number', this.adminRegesterForm.value['contactNumber']);
  fileData2.append('Gender', this.adminRegesterForm.value['gender']);
  fileData2.append('Email', this.adminRegesterForm.value['email']);
  fileData2.append('Ssn', this.adminRegesterForm.value['socialSecurityNumber']);
  fileData2.append('Address_Line1', this.adminRegesterForm.value['address1']);
  fileData2.append('Address_Line2', this.adminRegesterForm.value['address2']);
  fileData2.append('Country', this.adminRegesterForm.value['country']);
  fileData2.append('State', this.adminRegesterForm.value['state']);
  fileData2.append('City', this.adminRegesterForm.value['city']);
  fileData2.append('Zipcode', this.adminRegesterForm.value['zipcode']);
  fileData2.append('PCP_Name', this.adminRegesterForm.value['pcp']);
  fileData2.append('Emp_designation', this.adminRegesterForm.value['employeePostion']);
  fileData2.append('Immidiate_manager', this.adminRegesterForm.value['immediateManager']);
  fileData2.append('Emp_id', this.adminRegesterForm.value['employeeId']);
  fileData2.append('Emp_id_doc', this.employeeIdDoc);
  fileData2.append('Id_proof', this.idproofdoc);
  fileData2.append('Profile_image', this.profileImageDoc);
  fileData2.append('Created_by', this.createdBy);
  fileData2.append('Last_updated_by', this.createdBy);
    console.log(this.SelectImage);
  
    console.log(fileData2);
    this.adminService.saveAdminData(fileData2).subscribe(
      (res) => {
        console.log(res);
        this.route.navigate(['/admin/admin-details/' + res.data.id]);
      },
      (err) => {
        console.log(err);
      }
    );
  }
 

  // ConfirmPasswordValidator(password: string, confirmPassword: string) {
  //   return (formGroup: FormGroup) => {
  //     let control = formGroup.controls[password];
  //     let matchingControl = formGroup.controls[confirmPassword];
  //     if (
  //       matchingControl.errors &&
  //       !matchingControl.errors?.['confirmPasswordValidator']
  //     ) {
  //       return;
  //     }
  //     if (control.value !== matchingControl.value) {
  //       matchingControl.setErrors({ confirmPasswordValidator: true });
  //     } else {
  //       matchingControl.setErrors(null);
  //     }
  //   };
  // }
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


}
