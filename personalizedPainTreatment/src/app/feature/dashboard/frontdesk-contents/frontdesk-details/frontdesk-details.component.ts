import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-frontdesk-details',
  templateUrl: './frontdesk-details.component.html',
  styleUrls: ['./frontdesk-details.component.css'],
})
export class FrontdeskDetailsComponent implements OnInit {
  frontDeskData: any;
  pcp: string | null;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUserData().subscribe((data) => {
      console.log('frontdesk profile:' + data.name);
      // this.data = data;
      this.frontDeskData = data;
      this.pcp = localStorage.getItem('pcpData');
    });
  }
}
