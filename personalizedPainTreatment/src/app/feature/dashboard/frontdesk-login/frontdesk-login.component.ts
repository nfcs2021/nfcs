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
  userName:any;
  email: any;
  login_time_msg: string = 'First Time login';
  
  constructor(
    private fromBuilder: FormBuilder,
    private route: Router,
    private authservice: AuthService,
<<<<<<< HEAD
    private activateroute: ActivatedRoute
  ) { }
=======
    private frontdeskService: FrontdeskService
  ) {}
>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c

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

      User_Name: this.loginFormGroup.value['email'],
      Email: this.loginFormGroup.value['email'],
      Password: this.loginFormGroup.value['password'],
<<<<<<< HEAD
      PCP_Name: this.loginFormGroup.value['pcp']



    };
    this.authservice.loginUser(data).subscribe(
      (data) => {
        console.log('data' + data);
        console.log('role', data.data.role)
        localStorage.setItem('token', data.access_token);
        console.log(data.data);
        localStorage.setItem('role', data.data.roles.role)
        localStorage.setItem('name', data.data.First_Name + data.data.Last_Name)
        localStorage.setItem('createdBy', data.data.First_Name)
        localStorage.setItem('PCP_Name', data.data.PCP_Name)
        localStorage.setItem('id', data.data.id)
       
=======
      PCP_Name: this.loginFormGroup.value['pcp'],
    };
    this.authservice.loginUser(data).subscribe(
      (data) => {
        localStorage.setItem('token', data.access_token);
        localStorage.setItem('role', data.data.roles.role);
        localStorage.setItem('name',data.data.First_Name + data.data.Last_Name);
        localStorage.setItem('id', data.data.id);
        localStorage.setItem('createdBy', data.data.First_Name);
        localStorage.setItem('PCP_Name', data.data.PCP_Name);
        this.email = data.data.Email;
        this.userName=data.data.User_Name;
>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c
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
       this.dataservices.getFrontDeskData(data.data.User_Name).subscribe(
        data =>{
          console.log(data);
          
          console.log(data.length);
          if(data.length==1){
            this.route.navigateByUrl('/frontdesk/frontdeskpasswordChange/'+this.userName);
           }
           else{
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
<<<<<<< HEAD

=======
>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c
      }
    );
  }
}
