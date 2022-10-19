import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-frontdesk-details',
  templateUrl: './frontdesk-details.component.html',
  styleUrls: ['./frontdesk-details.component.css'],
})
export class FrontdeskDetailsComponent implements OnInit {
  pcp: string | null;
  frontdeskData: any;
  frontDeskData: any;
  constructor(private dataService: DataService) {}
  @Input("name") name:any

  id:any;
  ngOnInit(): void {
    console.log( localStorage.getItem('name'));
    this.id=localStorage.getItem('id')

    this.dataService.getUserData(localStorage.getItem('id')).subscribe(
      (data) => {
      console.log(data);
      this.frontDeskData=data;

    },err =>{
      console.log(err);

    }
    );
  }
}
