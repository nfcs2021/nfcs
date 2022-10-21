import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { data } from 'jquery';
@Component({
  selector: 'app-frontdesk-login',
  templateUrl: './frontdesk-login.component.html',
  styleUrls: ['./frontdesk-login.component.css'],
})
export class FrontdeskLoginComponent implements OnInit {
  loginFormGroup: FormGroup;
  submitted = false;
  touched = false;
  error: string;
  errordata: boolean;
  url: any;
  activated: boolean;
  errorMessage: string;
  login_user_msg: string;
  has_error = false;
  data: any;

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
      pcp: ['',Validators.required],
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

      Email: this.loginFormGroup.value['email'],
      Password: this.loginFormGroup.value['password'],
      PCP_Name:this.loginFormGroup.value['pcp']



    };
    this.authservice.loginUser(data).subscribe(
      (data) => {
        console.log('data' + data);
        console.log('role',data.data.role)
        localStorage.setItem('token', data.access_token);
       console.log(data.data);
       localStorage.setItem('role',data.data.roles.role)
       localStorage.setItem('name',data.data.First_Name+data.data.Last_Name)
       localStorage.setItem('createdBy',data.data.First_Name)
       localStorage.setItem('PCP_Name',data.data.PCP_Name)
        this.login_user_msg = 'Login in, Please wait... !!!';
        this.authservice.sentEvent();

        this.route.navigate(['/patient/nav']).then(() => {
          window.location.reload();
        });
        // this.route.navigateByUrl('/patient/nav');

      },
      (err) => {
        this.has_error = true;
        this.login_user_msg = 'Invalid Username and Password !!!';
        console.log(err);
        
      }
    );
  }
}
