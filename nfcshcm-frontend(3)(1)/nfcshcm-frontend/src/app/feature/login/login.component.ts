import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "../dashboard/auth/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  currentYear:number=new Date().getFullYear();
  loginForm: FormGroup;
  name: string;
  password: string;
  submitted = false;
  loading = false;
  subscription: any;
  login_user_msg: string;
  has_error = false;
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      empNo: ["", Validators.required],
      password: ["", Validators.required],
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
const data={
  empId:this.loginForm.value['empNo'],
  password:this.loginForm.value['password']
}

    this.loading = true;
    console.log(this.loginForm.value);
    this.authService.loginUser(data).subscribe(
      (res) => {
        console.log(res);
        
        localStorage.setItem("loginEmployeeData",res.emp.empId)
        this.login_user_msg = "Login in, Please wait... !!!";
        localStorage.setItem("token", res.token);
        this.route.navigate(["/home"]);
      },
      (error) => {
        console.log(error);
        this.has_error = true;
        this.login_user_msg = "Invalid Username and Password !!!";
      }
    );
  }
}
