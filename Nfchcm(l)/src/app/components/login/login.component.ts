import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email: string;
  password: string;
  submitted = false;
  loading = false;
  error = '';
  subscription: any;
  constructor(
    private formBuilder: FormBuilder,
    private authservice: AuthService,
    private dataservice: DataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.authservice.AuthenticationResultEvent.subscribe((result) => {
      if (result == true) {
        Swal.fire({
          text: 'logins Succesfully!',
          icon: 'success',
        });
        this.router.navigate(['sample']);
      } else {
        this.error = 'Invalid-Login';
        this.loading = false;
      }
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
    this.authservice.authenticate(this.loginForm.value);
    if (this.loginForm.invalid) {
      return;
    }
    this.loading = true;

    console.log(this.f['name'].value, this.f['password'].value);
  }
}
