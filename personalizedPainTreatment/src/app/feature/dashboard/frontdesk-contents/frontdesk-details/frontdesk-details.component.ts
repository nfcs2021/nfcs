<<<<<<< HEAD
import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
=======
import { Component, Input, OnInit } from '@angular/core';
>>>>>>> cbd0b9e05307126babb8c908a9a8829735784c83
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
  @Input("name") name:any

  id:any;
  ngOnInit(): void {
<<<<<<< HEAD
    this.getloginData();
  }
  getloginData() {
    var retrievedObject: any = localStorage.getItem('testObject');
    console.log('retrievedObject: ', JSON.parse(retrievedObject));
    this.frontdeskData = JSON.parse(retrievedObject);
    let newObject: any = localStorage.getItem('data');
    console.log(JSON.parse(newObject));
=======
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
>>>>>>> cbd0b9e05307126babb8c908a9a8829735784c83
  }
}
