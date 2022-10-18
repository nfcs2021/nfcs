import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-frontdesk-login',
  templateUrl: './frontdesk-login.component.html',
  styleUrls: ['./frontdesk-login.component.css'],
})
export class FrontdeskLoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  submitted = false;
  error: string;
  errordata: boolean;
  url: any;
  activated: boolean;
  errorMessage: string;
  login_user_msg: string;
  has_error = false;
  constructor(
    private fromBuilder: FormBuilder,
    private dataservices: DataService,
    private route: Router,
    private authservice: AuthService,
    private activateroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.url = this.route.url;
    this.activated = true;
    this.loginFormGroup = this.fromBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      pcp: [''],
    });
  }
  get f() {
    return this.loginFormGroup.controls;
  }
  onSubmit() {
    this.submitted = true;
    if (this.loginFormGroup.invalid) {
      return;
    }
    const data = {
      email: this.loginFormGroup.value['email'],
      password: this.loginFormGroup.value['password']
    };
    this.authservice.loginUser(data).subscribe(
      data =>{
        console.log(data);
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('pcpData',this.loginFormGroup.value['pcp'] );
        this.login_user_msg = 'Login in, Please wait... !!!';
        this.route.navigateByUrl('/patient/nav');
      },err =>{
        this.has_error = true;
        this.login_user_msg = 'Invalid Username and Password !!!';
      }
    );
    
    
  }
}
