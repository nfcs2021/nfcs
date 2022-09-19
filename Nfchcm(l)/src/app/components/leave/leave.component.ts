import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.css']
})
export class LeaveComponent implements OnInit {

  contactForm:FormGroup 
 
  submitted = false;
  selectedFile: string | Blob;
  constructor(private fb:FormBuilder) { }
  
  ngOnInit(): void {
    this.contactForm = this.fb.group({
    
      leavetype: ['', Validators.required],
      leavefrom: ['', Validators.required],
     
      session1: ['', Validators.required],
      leaveto: ['', Validators.required],
      session2: ['', Validators.required],
      reason:[""],
      file:[""] 
      
    })
    
  }
  get registerFormControl() {
    return this.contactForm.controls;
  }
  onClick(){
    const formData  = new FormData();

    formData.append('image', this.selectedFile);
  
    formData.append('leavetype',this.contactForm.value['leavetype']);
  
    formData.append('leavefrom',this.contactForm.value['leavefrom']);
    formData.append('session1',this.contactForm.value['session1']);
    formData.append('leaveto',this.contactForm.value['leaveto']);
    formData.append('session2',this.contactForm.value['session2']);
    formData.append('reason',this.contactForm.value['reason']);
    console.table(this.contactForm.value);
    this.contactForm.reset()
  
  }
//   onSubmit() {
//     this.submitted = true;
//     if (this.contactForm.valid) {
//       alert('Form Submitted succesfully!!!\n Check the values in browser console.');
//       console.table(this.contactForm.value);
//     }
//   // this.contactForm.reset()
// }
}