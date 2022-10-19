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
      Email: this.loginFormGroup.value['email'],
      Password: this.loginFormGroup.value['password'],
<<<<<<< HEAD
      PCP_Name: this.loginFormGroup.value['pcp'],
=======
      PCP_Name:this.loginFormGroup.value['pcp']
>>>>>>> cbd0b9e05307126babb8c908a9a8829735784c83
    };
    this.authservice.loginUser(data).subscribe(
      (data) => {
        console.log('data' + data);
        localStorage.setItem('token', data.access_token);
<<<<<<< HEAD
        localStorage.setItem('createdBy', data.data.First_Name);
        localStorage.setItem('testObject', JSON.stringify(data.data));
        localStorage.setItem('pcpData', this.loginFormGroup.value['pcp']);
        this.login_user_msg = 'Login in, Please wait... !!!';
        this.route.navigateByUrl('/patient/nav');
        this.authservice.sentEvent();
=======
       console.log(data.data);
       localStorage.setItem('name',data.data.First_Name+data.data.Last_Name)
       localStorage.setItem('PCP_Name',data.data.PCP_Name)
       localStorage.setItem('id',data.data.id)
        console.log('login component' + localStorage.getItem('token'));
        localStorage.setItem('pcpData', this.loginFormGroup.value['pcp']);
        this.login_user_msg = 'Login in, Please wait... !!!';
        this.authservice.sentEvent();
        this.route.navigate(['/patient/nav']).then(() => {
          window.location.reload();
        });
        // this.route.navigateByUrl('/patient/nav');
       
>>>>>>> cbd0b9e05307126babb8c908a9a8829735784c83
      },
      (err) => {
        this.has_error = true;
        this.login_user_msg = 'Invalid Username and Password !!!';
      }
    );
  }
}
