import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-frontdesk-password-change',
  templateUrl: './frontdesk-password-change.component.html',
  styleUrls: ['./frontdesk-password-change.component.css']
})
export class FrontdeskPasswordChangeComponent implements OnInit {

  loginFormGroup: FormGroup;
  submitted = false;
  
  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginFormGroup = this.fromBuilder.group({
      email: ['', Validators.required],
      oldPassword: ['', Validators.required],
      NewPassword: ['', Validators.required],
      ConfirmPassword: ['', Validators.required],
      
    },
    {
      validator: this.ConfirmPasswordValidator('NewPassword', 'ConfirmPassword'),
    });
  }
  get f() {
    return this.loginFormGroup.controls;
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
  onSubmit(){
    this.submitted = true;
    if (this.loginFormGroup.invalid) {
      return;
    }
    console.log(this.loginFormGroup.value);
    
  }
}
