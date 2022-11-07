import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  submitted = false;
  contactForm: FormGroup;
  USFormat = '(000) 123-4567'
  paceHolder = this.USFormat;
  phoneNumberEntered = '';
  constructor( private formBuilder: FormBuilder,private dataservice:DataService ) { }

  ngOnInit(): void {
    this.formInitilization();

  }
  get f() {
    return this.contactForm.controls;
  }
  formInitilization() {
    this.contactForm = this.formBuilder.group({
      First_Name: ['',
      [
        Validators.required,
        Validators.minLength(2),
        Validators.pattern('^[a-zA-Z]+$')
      ]],
      Subject: ['',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z]+$')
      ]],

      Contact_number: ['',
      [
        Validators.required,
        Validators.pattern('^[0-9 ()-]+$')
      ]],
      Email: ['',
      [
        Validators.required
      ]],
      Message:['']
    });

}

onPhoneChange(event: any) {

  let getIndexSpecialChar = [];
  let getactualSpecialChar = [];
  for (let i = 0; i < this.paceHolder.length; i++) {
    if (this.paceHolder[i] === ' ' || this.paceHolder[i] === '(' || this.paceHolder[i] === ')' || this.paceHolder[i] === '-') {
      getIndexSpecialChar.push(i);
      getactualSpecialChar.push(this.paceHolder[i]);
    }
  }
  console.log(getactualSpecialChar);
  console.log(getIndexSpecialChar);


  let len = event.target.value.length;
  let backspace = event.keyCode;

  if (backspace === 8) {
    len = len - 1;
  } else {
    len = event.target.value.length;
  }
  let eventTargetValue = event.target.value
  for (let i = 0; i < this.paceHolder.length; i++) {
    if (len === getIndexSpecialChar[i]) {
      this.phoneNumberEntered = eventTargetValue + getactualSpecialChar[i];
      if (this.phoneNumberEntered.length === getIndexSpecialChar[i + 1]) {
        this.phoneNumberEntered = this.phoneNumberEntered + getactualSpecialChar[i + 1];
      }
    }

  }
  console.log(event.target.value);

}
onClick(){

  this.submitted = true;
  if (this.contactForm.invalid) {
    return ;
  }
  const formData  = new FormData();
console.log(formData);



  formData.append('First_Name',this.contactForm.value['First_Name']);
  formData.append('Subject',this.contactForm.value['Subject']);
  formData.append('Email',this.contactForm.value['Email']);
  formData.append('Contact_number',this.contactForm.value['Contact_number']);
  formData.append('Message',this.contactForm.value['Message']);
  Swal.fire({
    text: 'Succefully.',
    icon: 'success'
  });
 this.dataservice.create(formData).subscribe(
  data => {


  },
  error =>{
      console.log(error);}

);
 console.log(this.contactForm)
this.contactForm.reset();




}


// }
}
