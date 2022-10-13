import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../../services/app.service';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  myData: any[]=[];
  patientRegesterForm:FormGroup;
  submitted = false;
  stateInfo: any[] = [];
  countryInfo: any[] = [];
  cityInfo: any[] = [];
  constructor(private http: HttpClient,
    private service: AppService,
    private formBuilder:FormBuilder,
    private patientService:PatientService
    ) { }

  ngOnInit(): void {

  const phoneInputField = document.querySelector("#phone");
  const phoneInput = (<any>window).intlTelInput(phoneInputField, {
   utilsScript:
       "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
   });
    this.formInitilization();
    this.getCountries();
  }

  getCountries(){
    this.service.allCountries().
    subscribe(
      data2 => {
        this.countryInfo=data2.Countries;
        //console.log('Data:', this.countryInfo);
      },
      err => console.log(err),
      () => console.log('complete')
    )
  }

  onChangeCountry(countryValue: any) {
    const country:any[]=[];
    for(let data of this.countryInfo)
    {
      country.push(data.CountryName)
    }
    this.stateInfo=this.countryInfo[country.indexOf(countryValue.target.value)].States;
    this.cityInfo=this.stateInfo[0]?.Cities;
  }

  telInputObject(obj:any) {
    console.log(obj);
    obj.setCountry('in');
  }

  get f() {
    return this.patientRegesterForm.controls;
  }
  formInitilization(){
    this.patientRegesterForm=this.formBuilder.group({
      firstName:['',[Validators.required,Validators.minLength(2)]],
      lastName:['',[Validators.required]],
      dob:['',[Validators.required]],
      contactNumber:['',[Validators.required,Validators.maxLength(10),Validators.minLength(10)]],
      email:['',[Validators.required]],
      socialSecurityNumber:['',[Validators.required]],
      address1:['',[Validators.required]],
      address2:['',[]],
      country:['',[Validators.required]],
      state:['',[Validators.required]],
      city:['',[Validators.required]],
      zipcode:['',[Validators.required]]
    });
  }

  onSubmit(){
    this.submitted = true;
   // stop here if form is invalid
    if (this.patientRegesterForm.invalid) {
      return;
    }
    console.log(this.patientRegesterForm.value);

    this.patientService.savePatientData(this.patientRegesterForm.value).subscribe(
      data =>{
        console.log(data);

      },error =>{
        console.log(error);

      }
    )

  }


}
