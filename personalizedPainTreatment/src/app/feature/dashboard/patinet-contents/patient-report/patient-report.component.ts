import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import jsPDF from 'jspdf';
import { DOCUMENT } from '@angular/common';
import { PatientService } from '../../services/patient.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuestionaryService } from '../../services/questionary.service';
import { Patient } from '../module/Patient';
import html2canvas from 'html2canvas';

@Component({
  selector: 'app-patient-report',
  templateUrl: './patient-report.component.html',
  styleUrls: ['./patient-report.component.css']
})
export class PatientReportComponent implements OnInit {
  questions: any[];
  @ViewChild('content1', { static: true }) element: ElementRef;
  rehabilitation_Therapies: any = 50;
  medication: any = 80;
  phychological_Approaches: any = 55;
  integrative_Medicine: any = 40;
  painProcedures: any = 25;
  rehabilitationTherapies: any = 90;
  weak_Opiods: any = 90;
  NSAIDS: any = 80;
  Anticonvulsants: any = 70;
  Pain_Anti_Depresentss = 50;
  MuscleRelaxants: any = 40;
  Anyoftheabove: any = 20;
  PsychologicalApproaches: any = 90;
  IntegrativeMedicine: any = 90;
  Cervical_Nerve_blocks: any = 90;
  Cervical_Epidural_Injections: any = 85;
  Lumbar_Nerve_Blocks: any = 75;
  Lumbar_Epidural_Injections: any = 55;
  barLength: any;
  percentage: number = 100;
  getDataById: any;
  selectedPartData: any;
  patientData: any;
  quetionaryData: any;
  counter: number
  length: number
  pdf: jsPDF
  registarPatient: any;
  patientRecordsData: any;
  previousPatientRecord: any;
  filePath: any;
  base64code:any;
  img:Observable<any>
  routerId:any;
  constructor(@Inject(DOCUMENT) private document: Document,
  private service:PatientService,
  private route:ActivatedRoute,
  private router:Router,
  private questionarydata: QuestionaryService
  ) { }

  ngOnInit(): void {
    this.questions = this.questionarydata.questions;
    this.routeId();
    console.log(this.router.url);
    
    
  }

  routeId() {
    this.route.params.subscribe(params => {
      this.routerId = +params['id']; // (+) converts string 'id' to a number
      console.log(this.routerId);
      this.getById(this.routerId);
    });
  }

  enableColorAfterLoad(): void {
    const pathElements = this.document.getElementsByTagName('path');
    for (let j = 0; j < this.selectedPartData.length; j++) {
      const selectedpart = this.selectedPartData[j].Body_parts_id;
      for (let i = 0; i < pathElements.length; ++i) {
        if (pathElements[i].id == selectedpart) {
          pathElements[i].style.fill = '#8585EC';
        }

      }
    }
  }

  getById(id: any) {
    this.service.getPatientQuestionaryDataById(id)
      .subscribe(data => {
        this.quetionaryData = data;
        console.log(data);
        for (let dataObj of this.quetionaryData) {
          const qId = dataObj.Sub_question_id;
          for (let questionsDataObj of this.questions) {
            if (qId === questionsDataObj.subQuestionId) {
              questionsDataObj.p_Options = dataObj.Answers;
            }
          }

        }

      },
        error => {
          console.log(error)
        }
      );

        this.service.getPatientDataRecords(id).subscribe(
          data => {
            this.patientRecordsData = data;
            console.log(this.patientRecordsData);
            this.service.getPatientDataById(data.Patient_id).subscribe(data => {
              this.patientData = data;
                  console.log(this.patientData);
            
          })
      },
        error => {
          console.log(error);
        });

      this.service.getSelectedPartsById(id)
        .subscribe(data => {
          this.selectedPartData = data
          this.enableColorAfterLoad();
          console.log(this.selectedPartData);

        },
          error => {
            console.log(error)
          });

    }

    rehabilitationTherapiesForPeoetntialImprovement() {
      return { width: this.rehabilitation_Therapies - 5 + '%' };
    }
    medicationForImprovement() {
      return { width: this.medication - 5 + '%' };
    }
    phychological() {
      return { width: this.phychological_Approaches - 5 + '%' };
    }
    integrative() {
      return { width: this.integrative_Medicine - 5 + '%' };
    }
    pain_Procedures() {
      return { width: this.painProcedures - 5 + '%' };
    }
    rehabilitation() {
      return { width: this.rehabilitationTherapies - 5 + '%' };
    }
    weakOpiods() {
      return { width: this.weak_Opiods - 5 + '%' };
    }
    nSAIDS() {
      return { width: this.NSAIDS - 5 + '%' };
    }
    anticonvulsants() {
      return { width: this.Anticonvulsants - 5 + '%' };
    }
    painAntiDepresentss() {
      return { width: this.Pain_Anti_Depresentss - 5 + '%' };
    }
    muscleRelaxants() {
      return { width: this.MuscleRelaxants - 5 + '%' };
    }
    anyoftheabove() {
      return { width: this.Anyoftheabove - 5 + '%' };
    }
    psychologicalApproaches() {
      return { width: this.PsychologicalApproaches - 5 + '%' };
    }
    integrativeMedicine() {
      return { width: this.IntegrativeMedicine - 5 + '%' };
    }
    cervical_Nerve_blocks() {
      return { width: this.Cervical_Nerve_blocks - 5 + '%' };
    }
    cervical_Epidural_Injections() {
      return { width: this.Cervical_Epidural_Injections - 5 + '%' };
    }
    lumbar_Nerve_Blocks() {
      return { width: this.Lumbar_Nerve_Blocks - 5 + '%' };
    }
    lumbar_Epidural_Injections() {
      return { width: this.Lumbar_Epidural_Injections - 5 + '%' };
    }

    downloadPDF() {
      this.pdf = new jsPDF('p', 'em', 'a4') // A4 size page of PDF
      this.length = 5
      this.counter = 0
  
      this.generatePDF()
    }
  
    generatePDF(){
  
      var data = document.getElementById('pdf' + this.counter)!
  
      html2canvas(data, {
        scale: 3 // make better quality ouput
      }).then(async (canvas) => {
        this.counter++
  
        // Few necessary setting options
        var imgWidth = this.pdf.internal.pageSize.getWidth();
        var imgHeight = this.pdf.internal.pageSize.getHeight();
  
        const contentDataURL = canvas.toDataURL('image/png')
        var position = 4
        this.pdf.addImage(contentDataURL, 'JPEG', 0, position, imgWidth, imgHeight - 8)
        // this.pdf.addImage(contentDataURL,'JPEG', 10, 10);
        // Control if new page needed, else generate the pdf
        if (this.counter < this.length) {
  
          this.pdf.addPage()
          this.generatePDF()
        } else {
          var file:any =window.open(this.pdf.output('bloburi'), '_blank');
          console.log(file);
  
          // this.pdf.save(this.patientData.patient_Name + '.pdf'); // Generated PDF
          // var pdfBase64 = this.pdf.output('save', 'filename.pdf');
          //  console.log(pdfBase64);
          //  const uploadResponse = await fetch( '/pdf-upload-handler', { method: 'PUT', body: blob } );
          //  console.log( uploadResponse );
       
          // window.open("mailto:example@domain.com?subject=Test&body=Test&attachments='" + blob + "'");
          // this.dataservice.sendReportByEmail("D:/Work/Angulardemo/angular-imp-questions.pdf").subscribe(res => {
          //   console.log(res);
          // },
          // err =>{
          //   console.log(err);
          // }
          // );
          console.log(this.pdf.output('datauristring'));
          this.base64code=this.pdf.output('datauristring');
          this.pdf.save(this.patientData.patient_Name + '.pdf'); // Generated PDF
             
        }
       
      });
      
    } 
}
