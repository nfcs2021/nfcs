import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-frontdesk-password-change',
  templateUrl: './frontdesk-password-change.component.html',
  styleUrls: ['./frontdesk-password-change.component.css']
})
export class FrontdeskPasswordChangeComponent implements OnInit {

  loginFormGroup: FormGroup;
  submitted = false;
  userName:any;
  error:boolean;
  errorMessage:any;
  constructor(private fromBuilder: FormBuilder,
    private dataService:DataService,
    private route:Router,
    private auth:AuthService,
    private router:ActivatedRoute) { }

  ngOnInit(): void {
   this.userName = this.router.snapshot.paramMap.get('userName');
   console.log(this.userName);
   
    this.loginFormGroup = this.fromBuilder.group({
      // UserName: ['', Validators.required],
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
    
    const data ={
      User_Name:this.userName,
      oldPassword:this.loginFormGroup.value['oldPassword'],
      Password:this.loginFormGroup.value['NewPassword']
    }
    console.log(data);
    
   this.dataService.changePassword(data).subscribe(
    data =>{

    console.log(data.message);
    if(data.message==='Invalid'){
      this.error=true;
    }else{
      this.auth.logout();
    }
    
      
    },err =>{
      console.log(err);
      this.error=true;
    }
   );
    
  }
}
