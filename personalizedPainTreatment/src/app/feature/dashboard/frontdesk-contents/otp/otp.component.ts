import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { data } from 'jquery';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { Subscription, take, timer } from 'rxjs';
import Swal from 'sweetalert2';
import { AuthRouteGaurdService } from '../../services/auth-route-gaurd.service';
import { DataService } from '../../services/data.service';
import { PasswordValidators } from '../validators/password-validators';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  popup = false;
  otp: any;
  showOtpComponent = true;
  email:any;
  submitted = false;
  ResetpasswordForm: FormGroup;
  countDown: Subscription;
  counter = 59;
  tick = 1000; 
  isAuth=false
  showPassword: boolean;
  showPasswordOnPress: boolean;
  showPassword1: boolean;
  showPasswordOnPress1: boolean;
  getData:any;
  @ViewChild(NgOtpInputComponent, { static: false}) 
  ngOtpInput:NgOtpInputComponent;
  config :NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    
    // disableAutoFocus: false,
    // placeholder: ''
  };
  response: any = new Array();
  error: boolean;

  constructor(private dataService:DataService,
    private route:ActivatedRoute, private formBuilder: FormBuilder,private router:Router
    ) { }

  ngOnInit(): void {
    this.email=this.route.snapshot.paramMap.get('userName');
    this.data();
    // this.generateOtp();
    this.formInitilization();
    this.countDown = timer(0, this.tick)
      .pipe(take(this.counter))
      .subscribe(() => {
        --this.counter;
        // console.log(this.counter);
        if (this.counter == 0) {
          this.countDown.unsubscribe();
        }
      });
  }
 
   data(){
    this.dataService.getdataByUserName(this.email).subscribe(
      res =>{

    this.getData=res[0];
    console.log(this.getData);
      },err => {
console.log(err);

      });
   }

  onOtpChange(otp:any) {
   this.otp=otp;
   
   
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
   
  }
  setVal(val:any) {
    this.ngOtpInput.setValue(val);
  }

  

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    
  }
  // generateOtp=()=>{
  //   let otp="";
  //   for (let i=0;i<4;i++){
  //     otp+=Math.floor(Math.random()*10);

  //   }
  //   return Number(otp);        
  
  // }

  onValidate(){
    console.log(this.otp);
  const data = {
    User_Name:this.email,
      otp:this.otp
    }
    this.dataService.verifyOtp(data).subscribe(
      data1 =>{
        console.log(data1);
        this.response.push(data1);
        console.log(this.response);
        
        console.log(this.response[0].message);
        if(this.response[0].message==='Success'){
          Swal.fire({
            text: 'Succefully.',
            icon: 'success'
          });
          this.response.pop();
          this.popup=true
        }else{
          Swal.fire({
            text: 'Invalid.',
            icon: 'warning'
          });
          this.response.pop();
        }
       
      },err =>{
        console.log(err);
        
      }

    )

    
  }

  // startTimer() {
  //   this.interval = setInterval(() => {
  //     if(this.timeLeft > 0) {
  //       this.timeLeft--;
  //     } else {
  //       this.timeLeft =30;
  //     }
  //   },1000)
  // }
  get f() {
    return this.ResetpasswordForm.controls;
  }
  formInitilization() {
    this.ResetpasswordForm = this.formBuilder.group(
      {
       
        password: ['', 
        [
          Validators.required,
          Validators.minLength(8),
          PasswordValidators.patternValidator(new RegExp("(?=.*[0-9])"), {
            requiresDigit: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[A-Z])"), {
            requiresUppercase: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[a-z])"), {
            requiresLowercase: true
          }),
          PasswordValidators.patternValidator(new RegExp("(?=.*[$@^!%*?&])"), {
            requiresSpecialChars: true
          })
        ]
      ],
       
        confirmPassword: ['', Validators.required],
      },
      {
        validator: this.ConfirmPasswordValidator('password', 'confirmPassword'),
      }
    );
  }
  get passwordValid() {
    return this.ResetpasswordForm.controls["password"].errors === null;
  }

  get requiredValid() {
    return !this.ResetpasswordForm.controls["password"].hasError("required");
  }

  get minLengthValid() {
    return !this.ResetpasswordForm.controls["password"].hasError("minlength");
  }

  get requiresDigitValid() {
    return !this.ResetpasswordForm.controls["password"].hasError("requiresDigit");
  }

  get requiresUppercaseValid() {
    return !this.ResetpasswordForm.controls["password"].hasError("requiresUppercase");
  }

  get requiresLowercaseValid() {
    return !this.ResetpasswordForm.controls["password"].hasError("requiresLowercase");
  }

  get requiresSpecialCharsValid() {
    return !this.ResetpasswordForm.controls["password"].hasError("requiresSpecialChars");
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

  onSubmit() {

    this.submitted = true;
    if (this.ResetpasswordForm.invalid) {
      return;
    }
    const data = {
     User_Name:this.email,
      Password: this.ResetpasswordForm.value['password'],
    };
    console.log(data);

    this.dataService.forgotPassword(data).subscribe(
      (data1) => {
        console.log('frontdeskData :', data1);
        this.router.navigateByUrl('');
      },
      (error) => {
        console.log(error);
        this.error=true;
      }
    );
  }
  resendOtp(){

  
    const data = {
      User_Name:this.email,
        otp:this.otp
      }
    this.dataService.requestotp(data).subscribe(
      data2=>{  
        console.log(data2);
        window.location.reload();
      },err =>{
        console.log(err);
        
      }
    )
   
  }
 
}

