import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../dashboard/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup 
  name: string;
  password: string;
  submitted = false;
  loading = false;
  subscription: any;
  login_user_msg: string;
  has_error = false;
  constructor(private formBuilder: FormBuilder,
    private authService:AuthService,
    private route:Router
    ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      empId: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }

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
    this.authService.loginUser(this.loginForm.value).subscribe(
      res =>{
        this.login_user_msg = 'Login in, Please wait... !!!';
        localStorage.setItem('token',res.token);
        this.route.navigate(['/home']);
      },
      error =>{
        console.log(error);
        
        this.has_error = true;
        this.login_user_msg = 'Invalid Username and Password !!!';
      }
    )

  };
}
