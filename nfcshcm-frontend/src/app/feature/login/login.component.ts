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
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
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

    console.log(this.f['name'].value, this.f['password'].value)



  };
}
