import { Component, OnInit, ViewChild } from '@angular/core';
import { NgOtpInputComponent, NgOtpInputConfig } from 'ng-otp-input';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
 
  otp: any;
  showOtpComponent = true;
  @ViewChild(NgOtpInputComponent, { static: false}) 
  ngOtpInput:NgOtpInputComponent;
  config :NgOtpInputConfig = {
    allowNumbersOnly: true,
    length: 4,
    
    // disableAutoFocus: false,
    // placeholder: ''
  };

  constructor() { }

  ngOnInit(): void {
    this.generateOtp();
  }
  onOtpChange(otp:any) {
   this.otp=otp;
   
   
  }

  setVal(val:any) {
    this.ngOtpInput.setValue(val);
  }

  

  onConfigChange() {
    this.showOtpComponent = false;
    this.otp = null;
    setTimeout(() => {
      this.showOtpComponent = true;
    }, 0);
  }
  generateOtp=()=>{
    let otp="";
    for (let i=0;i<4;i++){
      otp+=Math.floor(Math.random()*10);

    }
    return Number(otp);        
  
  }
    
}
