import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../dashboard/auth/auth.service';
import { EmployeeService } from '../dashboard/services/employee.service';
import { CustomValidators } from '../dashboard/validators/custom-validators';

@Component({
  selector: 'app-employee-password-generation',
  templateUrl: './employee-password-generation.component.html',
  styleUrls: ['./employee-password-generation.component.css']
})
export class EmployeePasswordGenerationComponent implements OnInit {
  loginForm: FormGroup 
  name: string;
  password: string;
  submitted = false;
  loading = false;
  subscription: any;
  login_user_msg: string;
  has_error = false
  
  constructor(
    private formBuilder: FormBuilder,
    private authService:AuthService,
    private route:Router,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      empId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {

    this.submitted = true;


    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    console.log(this.loginForm.value)
    this.authService.passwordGenaration(this.loginForm.value).subscribe(
      res =>{
        // this.login_user_msg = 'Login in, Please wait... !!!';
         this.route.navigate(['']);
      },
      error =>{
        console.log(error);
        
        this.has_error = true;
        this.login_user_msg = 'Invalid Username and Password !!!';
      }
    )

  };

}
