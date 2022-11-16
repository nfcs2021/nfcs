import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ThisReceiver } from '@angular/compiler';
import { data } from 'jquery';
// import * as FileSaver from 'file-saver';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as FileSaver from 'file-saver';
<<<<<<< HEAD
import { NgxSpinnerService } from 'ngx-spinner';
=======
import { FrontdeskService } from '../../services/frodesk.service';
>>>>>>> 406d7c7e8c24334b66e3aaad3f856b67f74f1757
@Component({
  selector: 'app-frontdesk-details',
  templateUrl: './frontdesk-details.component.html',
  styleUrls: ['./frontdesk-details.component.css'],
})
export class FrontdeskDetailsComponent implements OnInit {
  pcp: string | null;
  frontDeskData: any;
  routerId: any;
  retrivalId: any;
  id: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private frontdeskService: FrontdeskService,
    private router: Router,
<<<<<<< HEAD
    private http:HttpClient,
    private SpinnerService: NgxSpinnerService
=======
    private http: HttpClient
>>>>>>> 406d7c7e8c24334b66e3aaad3f856b67f74f1757
  ) {}
 
  ngOnInit(): void {
    console.log(localStorage.getItem('name'));
<<<<<<< HEAD
    this.id = localStorage.getItem('id');
this.routerId=this.route.snapshot.paramMap.get('id');
=======
    // this.id = localStorage.getItem('  ');
>>>>>>> 406d7c7e8c24334b66e3aaad3f856b67f74f1757
    if (this.route.snapshot.paramMap.get('id')) {
      this.id = this.route.snapshot.paramMap.get('id');
      this.retrvieFrontdekList(this.route.snapshot.paramMap.get('id'));
    } else {
      this.dataService.getUserData(localStorage.getItem('id')).subscribe(
        (data) => {
          console.log('frontdeskdetails..................' + data);
          this.frontDeskData = data;
          // alert(this.frontDeskData.Emp_id_doc_Name)
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }

  download(data: any) {
    console.log('data');
    return this.http
      .get('http://127.0.0.1:8000/api/Idproof/download/' + data.id, {
        responseType: 'arraybuffer',
      })
      .subscribe(
        (res) => {
          const blob = new Blob([res], { type: 'application/octet-stream' });
          FileSaver.saveAs(blob, data.Id_proof_Name);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  downloadEmployeeID(data: any) {
    console.log('data');
    return this.http
      .get('http://127.0.0.1:8000/api/EmpId/download/' + data.id, {
        responseType: 'arraybuffer',
      })
      .subscribe(
        (res) => {
          const blob = new Blob([res], { type: 'application/octet-stream' });
          FileSaver.saveAs(blob, data.Emp_id_doc_Name);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  downloadProfileImage(data: any) {
    console.log('data');
    return this.http
      .get('http://127.0.0.1:8000/api/Images/download/' + data.id, {
        responseType: 'arraybuffer',
      })
      .subscribe(
        (res) => {
          const blob = new Blob([res], { type: 'application/octet-stream' });
          FileSaver.saveAs(blob, data.Profile_image_Name);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  retrvieFrontdekList(id: any) {
    this.dataService.getUserData(id).subscribe((data) => {
      console.log(data);
      this.frontDeskData = data;
    });
  }

  // downLoadFile() {
  //   console.log(this.frontDeskData.Email);
  //   this.dataService
  //     .downloadFile(this.frontDeskData.Email)
  //     .subscribe((data) => {
  //       console.log('download[Symbol]...............', data);
  //       const blob = new Blob([data.body.Emp_id_doc]);
  //       const file = new File([blob], this.frontDeskData.Emp_id_doc);
  //       FileSaver.saveAs(file);
  //     });
  // }
  resetPassword() {
    this.SpinnerService.show();
    console.log(this.frontDeskData.User_Name);
    console.log(this.frontDeskData.Email);
    const data = {
      User_Name: this.frontDeskData.User_Name,
    };
    this.dataService.requestotp(data).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl(
          '/frontdesk/resetpassword/' + this.frontDeskData.User_Name,
        );
      },
      (err) => {
        console.log(err);
      }
    );
    setTimeout(() => {
      this.SpinnerService.hide();
    }, 5000);
  }
  profileImgDoc() {
    this.frontdeskService
      .profileDoc(this.frontDeskData.id)
      .subscribe((data) => {
        console.log(data);
        const blob = new Blob([data], { type: 'application/octet-stream' });
        const file = new File([blob], this.frontDeskData.Profile_image_Name);
        FileSaver.saveAs(file);
      });
  }

  // onSubmit() {
  //   this.submitted = true;
  //   if (this.ForgetpasswordForm.invalid) {
  //     return;
  //   }
  //   console.log(this.ForgetpasswordForm.value);
  //   this.dataService.requestotp(this.ForgetpasswordForm.value).subscribe(data => {
  //     console.log(data);
  //     this.route.navigateByUrl('/frontdesk/otp/'+this.ForgetpasswordForm.value['User_Name']);
  //   },
  //     error => {
  //       console.log(error);
  //     });
  // }
}
