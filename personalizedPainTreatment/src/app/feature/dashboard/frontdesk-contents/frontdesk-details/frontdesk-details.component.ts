import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../services/data.service';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-frontdesk-details',
  templateUrl: './frontdesk-details.component.html',
  styleUrls: ['./frontdesk-details.component.css'],
})
export class FrontdeskDetailsComponent implements OnInit {
  pcp: any;
  frontDeskData: any;
  routerId: any;
  retrivalId: any;
  constructor(
    private dataService: DataService,
    private route: ActivatedRoute
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
}
