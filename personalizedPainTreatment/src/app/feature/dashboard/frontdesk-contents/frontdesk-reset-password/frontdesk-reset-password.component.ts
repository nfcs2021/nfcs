import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { AuthService } from 'src/app/feature/dashboard/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { Subscription, take, timer } from 'rxjs';
import Swal from 'sweetalert2';
import { PasswordValidators } from '../validators/password-validators';

@Component({
  selector: 'app-frontdesk-reset-password',
  templateUrl: './frontdesk-reset-password.component.html',
  styleUrls: ['./frontdesk-reset-password.component.css']
})
export class FrontdeskResetPasswordComponent implements OnInit {

  otptimer:true;
  name: any;
  submitted = false;
  userName: any;
  error: boolean;
  errorMessage: any;
  popup = false;
  otp: any;
  showOtpComponent = true;
  email: any;
  ResetpasswordForm: FormGroup;
  countDown: Subscription;
  counter = 59;
  tick = 1000;
  isAuth = false;
  showPassword: boolean;
  showPasswordOnPress: boolean;
  showPassword1: boolean;
  showPasswordOnPress1: boolean;
  showPassword2: boolean;
  showPasswordOnPress2: boolean;
  @ViewChild(NgOtpInputComponent, { static: false })
  ngOtpInput: NgOtpInputComponent;
  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
  };
  response: any = new Array();

  constructor(
    private dataService: DataService,
    private auth: AuthService,
    private router: ActivatedRoute,
    private fromBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.email = this.router.snapshot.paramMap.get('userName');
    // this.email=this.route.snapshot.paramMap.get('userName')
    this.name = localStorage.getItem('name');

    this.ResetpasswordForm = this.fromBuilder.group(
      {
        // UserName: ['', Validators.required],
        oldPassword: ['', Validators.required],
        NewPassword: ['', 
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
        ConfirmPassword: ['', Validators.required],
      },
      {
        validator: this.ConfirmPasswordValidator(
          'NewPassword',
          'ConfirmPassword'
        ),
      }
    );

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
  get f() {
    return this.ResetpasswordForm.controls;
  }
  get passwordValid() {
    return this.ResetpasswordForm.controls["NewPassword"].errors === null;
  }

  get requiredValid() {
    return !this.ResetpasswordForm.controls["NewPassword"].hasError("required");
  }

  get requiresDigitValid() {
    return !this.ResetpasswordForm.controls["NewPassword"].hasError("requiresDigit");
  }

  get minLengthValid() {
    return !this.ResetpasswordForm.controls["NewPassword"].hasError("minlength");
  }
  
  
  get requiresUppercaseValid() {
    return !this.ResetpasswordForm.controls["NewPassword"].hasError("requiresUppercase");
  }
  
  get requiresLowercaseValid() {
    return !this.ResetpasswordForm.controls["NewPassword"].hasError("requiresLowercase");
  }
  
  get requiresSpecialCharsValid() {
    return !this.ResetpasswordForm.controls["NewPassword"].hasError("requiresSpecialChars");
  }
  onOtpChange(otp: any) {
    this.otp = otp;
  }
  transform(value: number): string {
    const minutes: number = Math.floor(value / 60);
    return (
      ('00' + minutes).slice(-2) +
      ':' +
      ('00' + Math.floor(value - minutes * 60)).slice(-2)
    );
  }
  setVal(val: any) {
    this.ngOtpInput.setValue(val);
  }

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
  }
  onValidate() {
    console.log(this.otp);
    console.log(this.email);

    const data = {
      User_Name: this.email,
      otp: this.otp,
    };
    this.dataService.verifyOtp(data).subscribe(
      (data1) => {
        console.log(data1);
        this.response.push(data1);
        console.log(this.response);

        console.log(this.response[0].message);
        if (this.response[0].message === 'Success') {
          Swal.fire({
            text: 'Succefully.',
            icon: 'success',
          });
          this.response.pop();
          this.popup = true;
        } else {
          Swal.fire({
            text: 'Invalid.',
            icon: 'warning',
          });
          this.response.pop();
        }
      },
      (err) => {
        console.log(err);
      }
    );
  }
  resendOtp() {
    const data = {
      User_Name: this.email,
      otp: this.otp,
    };
    this.dataService.requestotp(data).subscribe(
      (data2) => {
        console.log(data2);
       window.location.reload();
      },
      (err) => {
        console.log(err);
      }
    );
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
      User_Name: this.email,
      oldPassword: this.ResetpasswordForm.value['oldPassword'],
      Password: this.ResetpasswordForm.value['NewPassword'],
    };
    this.dataService.changePasswordAfterLogin(data).subscribe(
      (data) => {
        this.auth.logout();
      },
      (err) => {
        console.log(err);
        this.error = true;
      }
    );
  }
}
