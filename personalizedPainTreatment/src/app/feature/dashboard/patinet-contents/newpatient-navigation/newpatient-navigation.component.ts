import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-newpatient-navigation',
  templateUrl: './newpatient-navigation.component.html',
  styleUrls: ['./newpatient-navigation.component.css'],
})
export class NewpatientNavigationComponent implements OnInit {
  userdata: any;
  pcp: any;
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.pcp = localStorage.getItem('pcpData');
    console.log('buttons................' + localStorage.getItem('token'));
  }

  //   applyStyle(){
  //     if(this.pcp!=='admin')
  //     return width: 40% ;
  //   }
  // }
}
