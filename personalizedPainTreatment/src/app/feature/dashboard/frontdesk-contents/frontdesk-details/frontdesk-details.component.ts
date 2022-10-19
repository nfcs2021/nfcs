import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-frontdesk-details',
  templateUrl: './frontdesk-details.component.html',
  styleUrls: ['./frontdesk-details.component.css'],
})
export class FrontdeskDetailsComponent implements OnInit {
  pcp: string | null;
  frontdeskData: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getloginData();
  }
  getloginData() {
    var retrievedObject: any = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    this.frontdeskData = JSON.parse(retrievedObject);
    let newObject: any = localStorage.getItem('data');
    console.log(JSON.parse(newObject));
  }
}
