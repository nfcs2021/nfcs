import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { DataService } from '../services/data.service';
import { FrontdeskService } from '../services/frontdesk.service';
import Swal from 'sweetalert2';
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
  email: any;
  login_time_msg: string = 'First Time login';

  constructor(
    private fromBuilder: FormBuilder,
    private route: Router,
    private authservice: AuthService,
    private frontdeskService: FrontdeskService
  ) {}

  ngOnInit(): void {
    this.url = this.route.url;
    this.activated = true;
    this.loginFormGroup = this.fromBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      pcp: ['', Validators.required],
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
      UserName: this.loginFormGroup.value['email'],
=======

>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
      Email: this.loginFormGroup.value['email'],
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
      Password: this.loginFormGroup.value['password'],
      PCP_Name: this.loginFormGroup.value['pcp'],
    };
    this.authservice.loginUser(data).subscribe(
      (data) => {
        // console.log('data' + data);
        // console.log('role..............', data.data.roles.role);
        localStorage.setItem('token', data.access_token);
<<<<<<< HEAD
        // console.log(data.data);
        localStorage.setItem('role', data.data.roles.role);
        localStorage.setItem(
          'name',
          data.data.First_Name + data.data.Last_Name
        );
        localStorage.setItem('id', data.data.id);
        localStorage.setItem('createdBy', data.data.First_Name);
        localStorage.setItem('PCP_Name', data.data.PCP_Name);
        this.email = data.data.Email;
        this.login_user_msg = 'Login in, Please wait... !!!';
        this.authservice.sentEvent();
        this.frontdeskService.getLogiData(this.email).subscribe(
          (logindata) => {
            // console.log('logindata............', logindata);
            if (logindata.Last_login_time == undefined) {
              localStorage.setItem('lastLogin', this.login_time_msg);
            } else {
              localStorage.setItem('lastLogin', logindata.Last_login_time);
            }
            const loginData = {
              front_desk_id: data.data.id,
              Email: data.data.Email,
              PCP_Name: data.data.PCP_Name,
              Password: data.data.Password,
            };
            this.frontdeskService.saveLoginDetails(loginData).subscribe(
              (savedata) => {
                console.log(savedata);
                this.route.navigate(['/patient/nav']).then(() => {
                  window.location.reload();
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sucessfully Login',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                });
              },
              (error) => {
                console.log(error);
              }
            );
          },
          (error) => {
            console.log(error);
          }
        );
=======
       console.log(data.data);
<<<<<<< HEAD
       localStorage.setItem('role',data.data.roles.role)
       localStorage.setItem('name',data.data.First_Name+' '+data.data.Last_Name)
=======
       localStorage.setItem('role',data.data.role)
       localStorage.setItem('name',data.data.First_Name+data.data.Last_Name)
>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
       localStorage.setItem('createdBy',data.data.First_Name)
       localStorage.setItem('PCP_Name',data.data.PCP_Name)
        this.login_user_msg = 'Login in, Please wait... !!!';
        this.authservice.sentEvent();
        const loginData={
        Email:data.data.Email,
        PCP_Name:data.data.PCP_Name,
        password:data.data.Password
        }
        // this.dataservices.frontDeskLoginInfromation(loginData).subscribe(
        //   res =>{
        //     console.log(res);
            
        //   },err =>{
        //     console.log(err);
            
        //   }
        // )
       this.dataservices.getFrontDeskData(data.data.Email).subscribe(
        data =>{
          console.log(data.length);
          if(data.length==1){
            this.route.navigateByUrl('/frontdesk/frontdeskpasswordChange');
          }else{
            this.route.navigate(['/patient/nav']).then(() => {
                window.location.reload();
              });
          }
        },err =>{
          console.log(err);
          
        }
       ) 

        // this.route.navigate(['/patient/nav']).then(() => {
        //   window.location.reload();
        // });
        // this.route.navigateByUrl('/patient/nav');

>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa
      },
      (err) => {
        this.has_error = true;
        this.login_user_msg = 'Invalid Username and Password !!!';
        console.log(err);
      }
    );
  }
}
