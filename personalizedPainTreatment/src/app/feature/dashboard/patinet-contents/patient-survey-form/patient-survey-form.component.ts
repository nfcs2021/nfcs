import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionaryService } from '../../services/questionary.service';
import * as $ from 'jquery';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../../services/patient.service';
@Component({
  selector: 'app-patient-survey-form',
  templateUrl: './patient-survey-form.component.html',
  styleUrls: ['./patient-survey-form.component.css'],
})
export class PatientSurveyFormComponent implements OnInit {
  patientid: any;
  questions: any[];
  selectedPart: any[] = new Array();
  selectedPartData: any;
  checkbox: boolean = false;
  id: any;
  disabled: boolean = false;
  getDataById: any;
  patientUserData: any;
  age: number;
  routerId: any;
  private unsubscribeQuetionaryData: Subscription;
  private unsubscribeSelectedParts: Subscription;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private questionarydata: QuestionaryService,
    private router: Router,
    private route: ActivatedRoute,
    private service: PatientService
  ) {}

  ngOnInit(): void {
    this.questions = this.questionarydata.questions;
    this.disabledData(this.disabled);
    this.routeId();
  }
  routeId() {
    this.route.params.subscribe((params) => {
      this.routerId = +params['id']; // (+) converts string 'id' to a number
    });
  }

  disabledData(disabled: boolean) {
    if (!disabled) {
      $(document).ready(function () {
        $('path').click(function () {
          $(this).toggleClass('on');
        });
      });
      for (let questionsDataObj of this.questions) {
        questionsDataObj.p_Options = '';
        questionsDataObj.text1 = '';
        questionsDataObj.text2 = '';
      }
    }
  }

  clickSelectedPart(selectedPart: string) {
    var isexist = false;
    if (this.disabled) {
      return;
    }
    for (let selectedPartObj of this.selectedPart) {
      if (selectedPart == selectedPartObj) {
        isexist = true;
        $(document).ready(function () {
          $('path').click(function () {
            $(this).addClass('on');

            $(this).click(function () {
              $(this).removeClass('on');
            });
          });
        });
        const index = this.selectedPart.indexOf(selectedPart);
        this.selectedPart.splice(index, 1);
        console.log(selectedPart)
        break;
      }
    }

    if (!isexist) {
      this.selectedPart.push(selectedPart);
    }
  }

  clickCheckbox() {
    if (this.checkbox == false) {
      console.log('no pain');
      this.selectedPart.splice(0);
      $(document).ready(function () {
        $('path').removeClass('on');
        $('path').hide();
      });
      this.disabledData(this.checkbox);
    } else {
      console.log('pain');
      $(document).ready(function () {
        $('path').show();
      });
    }
  }

  onSubmit() {
    console.log(this.questions);
    const patientdata = {
      Patient_id: this.routerId,
      Patient_report: 'test',
      Physician_report: 'test',
      PCP_Name: localStorage.getItem('PCP_Name'),
      Created_by:localStorage.getItem('name')
    };
    this.service.savePatientRecord(patientdata).subscribe(
      (data) => {
        console.log(data);

        this.patientid = data.id;

        this.createQuestiondata(this.patientid);
        this.createSelectedParts(this.patientid);
      },
      (error) => {
        console.log(error);
      }
    );


    // var userId: number = 0;
    // if (userName != undefined && userName.toLowerCase() == 'krishna') {
    //   userId = 10001;
    // } else if (userName != undefined && userName.toLowerCase() == 'ram') {
    //   userId = 10002;
    // } else {
    //   userId = 10003;
    // }
  }

  createQuestiondata(id: any) {
    var reportId: any;

    var recordId:any;



    for (let data1 of this.questions) {
     const data={
      Record_id:id,
      Patient_id:this.routerId,
      Sub_question_id:data1.subQuestionId,
      Answers:data1.p_Options,
      Answer1:data1.text1,
      Created_by:'test',
      Updated_By:'test'
     }
     console.log(data);

     this.service.savePatientSurveyForm(data).subscribe(
              (response) => {
                console.log(data);
                
              },
              (error) => {
                console.log(error);
              }
            );
          }
     }

  createSelectedParts(id: number) {
    for (let data of this.selectedPart) {
      const data1 = {
        Record_id: id,
        Body_parts_id: data,
        Patient_id:this.routerId,
      };
      this.service.saveSelectedParts(data1).subscribe(
        (data) => {
          console.log(data);

        },
        (error) => {
          console.log(error);
        }
      );
    }
    this.router.navigate(['/patient/view/' + this.patientid]);
  }
 }
