import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { QuestionaryService } from '../../services/questionary.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-patient-survey-form',
  templateUrl: './patient-survey-form.component.html',
  styleUrls: ['./patient-survey-form.component.css']
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
  private unsubscribeQuetionaryData: Subscription;
  private unsubscribeSelectedParts: Subscription;
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private questionarydata: QuestionaryService,
  ) { }

  ngOnInit(): void {

    this.questions = this.questionarydata.questions;
    this.disabledData(this.disabled);
    
  }

  disabledData(disabled: boolean) {
    if (!disabled) {

      $(document).ready(function () {

        $("path").click(function () {

          $(this).toggleClass("on");

        });



      });
      for (let questionsDataObj of this.questions) {

        questionsDataObj.p_Options = "";
        questionsDataObj.text1 = "";
        questionsDataObj.text2 = "";


      }
    }
  }
  createSelectedParts(id: number) {
    for (let data of this.selectedPart) {
      const data1 = {
        patientData_Id: id,
        selectedPart: data

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

          $("path").click(function () {
            $(this).addClass("on");

            $(this).click(function () {
              $(this).removeClass("on")

            })
          });

        });
        const index = this.selectedPart.indexOf(selectedPart)
        this.selectedPart.splice(index, 1);
        break;
      }
    }

    if (!isexist) {
      this.selectedPart.push(selectedPart)

    }
  }

  clickCheckbox() {
    if (this.checkbox == false) {
      console.log('no pain');
      this.selectedPart.splice(0);
      $(document).ready(function () {

        $("path").removeClass("on")
        $("path").hide();
      });
      this.disabledData(this.checkbox);

    } else {
      console.log("pain")
      $(document).ready(function () {

        $("path").show();
      });
    }

  }

  onSubmit(){

  }
}
