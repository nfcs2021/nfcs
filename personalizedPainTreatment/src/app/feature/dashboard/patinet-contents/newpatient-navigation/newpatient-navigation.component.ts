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
  role: any;

  constructor(private dataService: DataService) {

  }


  ngOnInit(): void {
    this.role = localStorage.getItem('role');

    // console.log(this.role);
    // console.log(localStorage.getItem('id'))
    

    console.log("ng.........",this.role);

    console.log(this.role);


  }

  //   applyStyle(){
  //     if(this.pcp!=='admin')
  //     return width: 40% ;
  //   }
  // }
}
