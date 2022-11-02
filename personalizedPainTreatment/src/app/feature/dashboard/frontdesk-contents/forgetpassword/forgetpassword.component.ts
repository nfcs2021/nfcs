import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {
  submitted = false;
  otp: any
  USFormat = '(000) 123-4567';
  placeHolder = this.USFormat;
  phoneNumberEntered = '';

  ForgetpasswordForm: FormGroup;


<<<<<<< HEAD
  constructor(private formBuilder: FormBuilder, private dataservice: DataService,
    private route:Router) { }
=======
  constructor( private formBuilder: FormBuilder,
    private route:Router,
    private dataService:DataService) { }
>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c

  ngOnInit(): void {
    this.formInitilization();
  }
  get f() {
    return this.ForgetpasswordForm.controls;
  }
  formInitilization() {
    this.ForgetpasswordForm = this.formBuilder.group({
<<<<<<< HEAD
      // firstName: ['', [Validators.required, Validators.minLength(2)]],
      // lastName: ['', [Validators.required]],

      // contactNumber: ['', [Validators.required]],
      Email: ['', [Validators.required]],
      // pcp: ['', [Validators.required]]
=======
      User_Name: ['', [Validators.required]]
>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c
    });
  }



  onPhoneChange(event: any) {
    let getIndexSpecialChar = [];
    let getactualSpecialChar = [];
    for (let i = 0; i < this.placeHolder.length; i++) {
      if (
        this.placeHolder[i] === ' ' ||
        this.placeHolder[i] === '(' ||
        this.placeHolder[i] === ')' ||
        this.placeHolder[i] === '-'
      ) {
        getIndexSpecialChar.push(i);
        getactualSpecialChar.push(this.placeHolder[i]);
      }
    }
<<<<<<< HEAD
    console.log(getactualSpecialChar);
    console.log(getIndexSpecialChar);

    let len = event.target.value.length;
    let backspace = event.keyCode;

    if (backspace === 8) {
      len = len - 1;
    } else {
      len = event.target.value.length;
    }
    let eventTargetValue = event.target.value;
    for (let i = 0; i < this.placeHolder.length; i++) {
      if (len === getIndexSpecialChar[i]) {
        this.phoneNumberEntered = eventTargetValue + getactualSpecialChar[i];
        if (this.phoneNumberEntered.length === getIndexSpecialChar[i + 1]) {
          this.phoneNumberEntered =
            this.phoneNumberEntered + getactualSpecialChar[i + 1];
        }
      }
    }
    console.log(event.target.value);
  }
  onSubmit() {
    this.submitted = true;
    if (this.ForgetpasswordForm.invalid) {
      return;
    }
    console.log(this.ForgetpasswordForm.value);
    
    this.dataservice.requestotp(this.ForgetpasswordForm.value).subscribe(data => {
      console.log(data);
      this.route.navigateByUrl('/frontdesk/otp/'+this.ForgetpasswordForm.value['Email']);
    },
      error => {
        console.log(error);
      }

    );


  }
=======
    onSubmit() {
      this.submitted = true;
      if (this.ForgetpasswordForm.invalid) {
        return;
      }
      console.log(this.ForgetpasswordForm.value);
      this.dataService.requestotp(this.ForgetpasswordForm.value).subscribe(data => {
        console.log(data);
        this.route.navigateByUrl('/frontdesk/otp/'+this.ForgetpasswordForm.value['User_Name']);
      },
        error => {
          console.log(error);
        });
    }

>>>>>>> 9f893030e902c7a28acd39b6ac8c86e0ff969a8c
}
