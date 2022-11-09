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
import { data, error } from 'jquery';
import { FrontdeskService } from '../services/frodesk.service';
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
<<<<<<< HEAD
  username: any;
  login_time_msg: string = 'First time Login...';
  userName: any;

=======
  userName:any;
  email: any;
  login_time_msg: string = 'First Time login';
   // variable
  
   showPassword: boolean;
   showPasswordOnPress: boolean;
  
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
  constructor(
    private fromBuilder: FormBuilder,
    private dataservices: DataService,
    private route: Router,
    private authservice: AuthService,
    private frontdeskService: FrontdeskService,
<<<<<<< HEAD
    private dataService: DataService
  ) {}

=======
    private dataService:DataService
  ) {
   
  }
  
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
  ngOnInit(): void {
   
    this.url = this.route.url;
    this.activated = true;
    this.loginFormGroup = this.fromBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      pcp: ['', Validators.required],
    });
    if(localStorage.getItem('id')){
     this.authservice.logout();
    }
  }
  
  
  get f() {
    return this.loginFormGroup.controls;
  }
  // showPassword() {
  //   this.show_button = !this.show_button;
  //   this.show_eye = !this.show_eye;
  // }

  onSubmit() {
    this.submitted = true;
    if (this.loginFormGroup.invalid) {
      return;
    }
    const data = {
      User_Name: this.loginFormGroup.value['email'],
      Password: this.loginFormGroup.value['password'],
      PCP_Name: this.loginFormGroup.value['pcp'],
    };
    this.authservice.loginUser(data).subscribe(
      (data) => {
        console.log('data' + data);
        console.log('role', data.data.roles.role);
        localStorage.setItem('token', data.access_token);
        console.log(data.access_token);
        console.log(data.data);
        localStorage.setItem('role', data.data.roles.role);
<<<<<<< HEAD
        console.log(data.role);
        localStorage.setItem(
          'name',
          data.data.First_Name + data.data.Last_Name
        );
=======
        localStorage.setItem('name',data.data.First_Name +' '+ data.data.Last_Name);
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
        localStorage.setItem('id', data.data.id);
        localStorage.setItem('createdBy', data.data.First_Name);
        localStorage.setItem('PCP_Name', data.data.PCP_Name);
        this.login_user_msg = 'Login in, Please wait... !!!';
        this.authservice.sentEvent();
        this.userName = data.data.User_Name;
        // alert(data.data.User_Name);
        this.frontdeskService.getLogiData(this.userName).subscribe(
          (logindata) => {
            console.log(logindata);
            if (logindata.Last_login_time == undefined) {
              localStorage.setItem('lastLogin', this.login_time_msg);
            } else {
              localStorage.setItem('lastLogin', logindata.Last_login_time);
            }
            const loginData = {
              front_desk_id: data.data.id,
              User_Name: data.data.User_Name,
              PCP_Name: data.data.PCP_Name,
              Password: data.data.Password,
            };
            this.frontdeskService
              .saveLoginDetails(loginData)
              .subscribe((savedata) => {
                console.log(savedata);
                this.dataService.getFrontDeskData(this.userName).subscribe(
                  (data) => {
                    console.log(data);

                    console.log(data.length);
                    if (data.length == 1) {
                      this.route.navigateByUrl(
                        '/frontdesk/frontdeskpasswordChange/' + this.userName
                      );
                    } else {
                      this.route.navigate(['/patient/nav']).then(() => {
                        window.location.reload();
                      });
                    }
                  },
                  (err) => {
                    console.log(err);
<<<<<<< HEAD
                  }
                );
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
=======
                    
                  });
                  Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Sucessfully Login',
                    showConfirmButton: false,
                    timer: 1500,
                  });
                },error =>{
                  console.log(error);
                  
                }
                );
              },
              (error) => {
                console.log(error);
              }
            );
          },(error) => {
            this.has_error=true;
            this.login_user_msg='Invalid Credentials'
>>>>>>> 9130a70c9e69368cffcfbcecbe455856aabd3d52
            console.log(error);
           
          }
        );
      },
      (error) => {
        this.login_user_msg = 'invalid credentials!!';
        this.has_error = true;
        console.log(error);
      }
    );

    // this.route.navigate(['/patient/nav']).then(() => {
    //   window.location.reload();
    // });
    // this.route.navigateByUrl('/patient/nav');
  }
}
