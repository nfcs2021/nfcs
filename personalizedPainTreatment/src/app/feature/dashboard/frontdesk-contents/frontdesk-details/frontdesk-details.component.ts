import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ThisReceiver } from '@angular/compiler';
import { data } from 'jquery';
import * as FileSaver from 'file-saver';
import { FrontdeskService } from '../../services/frontdesk.service';

@Component({
  selector: 'app-frontdesk-details',
  templateUrl: './frontdesk-details.component.html',
  styleUrls: ['./frontdesk-details.component.css'],
})
export class FrontdeskDetailsComponent implements OnInit {
  pcp: string;
  frontDeskData: any;
  routerId: any;
  retrivalId: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute,
    private frontdeskService: FrontdeskService,
    private router: Router
  ) {}
  id: any;
  ngOnInit(): void {
    console.log(localStorage.getItem('name'));
    this.id = localStorage.getItem('id');
    if (this.route.snapshot.paramMap.get('id')) {
      this.retrvieFrontdekList(this.route.snapshot.paramMap.get('id'));
    } else {
      this.dataService.getUserData(localStorage.getItem('id')).subscribe(
        (data) => {
          console.log('frontdeskdetails..................' + data);
          this.frontDeskData = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  retrvieFrontdekList(id: any) {
    this.dataService.getUserData(id).subscribe((data) => {
      console.log(data);
      this.frontDeskData = data;
    });
  }
  retriveLoginData(id: any) {}

  downLoadFile() {
    console.log(this.frontDeskData.Email);
    this.dataService
      .downloadFile(this.frontDeskData.Email)
      .subscribe((data) => {
        console.log('download[Symbol]...............', data);
        const blob = new Blob([data.body.Emp_id_doc]);
        const file = new File([blob], this.frontDeskData.Emp_id_doc);
        FileSaver.saveAs(file);
      });
  }
  resetPassword() {
    this.router.navigate([
      '/frontdesk/changepassword' + this.frontDeskData.Email,
    ]);
  }
}
