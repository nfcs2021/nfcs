import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeLeaveService } from '../../services/employeeLeave.service';

@Component({
  selector: 'app-holidays-manage',
  templateUrl: './holidays-manage.component.html',
  styleUrls: ['./holidays-manage.component.css']
})
export class HolidaysManageComponent implements OnInit {
  create_leave_req_msg: string;
  public has_error = false;
  holidayForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    private employeeLeaveService:EmployeeLeaveService
    ) { }

  ngOnInit() {
    this.holidayFormInitilization();
  }
  holidayFormInitilization(){
    this.holidayForm = this.formBuilder.group({
      hoidayDate: ['', Validators.required],
      description: ['',[Validators.required,Validators.minLength(4)] ]
    });
  }
  onSubmit(){
    console.log(this.holidayForm.value);
    const data={
      holidayDate:this.holidayForm.value['hoidayDate'],
      description:this.holidayForm.value['description'],
    }
    this.employeeLeaveService.saveHolidayDate(data).subscribe(
      res =>{
    console.log(res);
    this.holidayForm.reset();
    
      },error =>{
      console.log(error);

      }
    )
    
  }

}
