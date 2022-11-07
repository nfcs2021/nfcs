import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { AuthService } from 'src/app/feature/dashboard/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';
import { Subscription, take, timer } from 'rxjs';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-frontdesk-reset-password',
  templateUrl: './frontdesk-reset-password.component.html',
  styleUrls: ['./frontdesk-reset-password.component.css'],
})
export class FrontdeskResetPasswordComponent implements OnInit {
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
  counter = 30;
  tick = 1000;
  isAuth = false;
  @ViewChild(NgOtpInputComponent, { static: false })
  ngOtpInput: NgOtpInputComponent;
  config: NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
  };
  response: any = new Array();
  oldpassword: any;

  constructor(
    private dataService: DataService,
    private auth: AuthService,
    private router: ActivatedRoute,
    private fromBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.email = this.router.snapshot.paramMap.get('userName');
    // this.email=this.route.snapshot.paramMap.get('userName')
    alert(this.email);
    this.name = localStorage.getItem('name');

    this.ResetpasswordForm = this.fromBuilder.group(
      {
        // UserName: ['', Validators.required],
        oldPassword: ['', Validators.required],
        NewPassword: ['', Validators.required],
        ConfirmPassword: ['', Validators.required],
      },
      {
        // validator: this.ConfirmPasswordValidator(
        //   'NewPassword',
        //   'ConfirmPassword'
        // ),
        validator: this.oldPasswordValidator('oldPassword', 'NewPassword'),
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
      Email: this.email,
      otp: this.otp,
    };
    this.dataService.requestotp(data).subscribe(
      (data2) => {
        console.log(data2);
        this.transform(this.counter);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  // userNameValidation(UserName: string) {
  //   return (formGroup: FormGroup) => {
  //     let matchingControl = formGroup.controls[UserName];
  //     if (
  //       matchingControl.errors &&
  //       !matchingControl.errors?.['UserNameValidator']
  //     ) {
  //       return;
  //     }
  //     for (let control of this.oldpassword) {
  //       if (control === matchingControl.value) {
  //         matchingControl.setErrors({ UserNameValidator: true });
  //         break;
  //       } else {
  //         matchingControl.setErrors(null);
  //       }
  //     }
  //   };
  // }

  oldPasswordValidator(password: string, newPassword: string) {
    return (formGroup: FormGroup) => {
      let control = formGroup.controls[password];
      let matchingControl = formGroup.controls[newPassword];
      if (
        matchingControl.errors &&
        !matchingControl.errors?.['OldPasswordValidator']
      ) {
        return;
      }
      if (control.value == matchingControl.value) {
        matchingControl.setErrors({ OldPasswordValidator: true });
      } else {
        matchingControl.setErrors(null);
      }
    };
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
    this.oldpassword = this.ResetpasswordForm.value['oldPassword'];
    this.dataService.changePassword(data).subscribe(
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
