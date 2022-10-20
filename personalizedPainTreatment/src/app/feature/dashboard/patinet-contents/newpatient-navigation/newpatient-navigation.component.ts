import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-newpatient-navigation',
  templateUrl: './newpatient-navigation.component.html',
  styleUrls: ['./newpatient-navigation.component.css'],
})
export class NewpatientNavigationComponent implements OnInit {
  userdata: any;
<<<<<<< HEAD
  role: any;
  
=======
  pcp: any;

>>>>>>> dade6157c2c103ccd9bab6c37bb61e616c4361ef
  constructor(private dataService: DataService) {

  }


  ngOnInit(): void {
<<<<<<< HEAD
    this.role = localStorage.getItem('role');
    
=======
    this.pcp = localStorage.getItem('pcpData');

>>>>>>> dade6157c2c103ccd9bab6c37bb61e616c4361ef
  }

  //   applyStyle(){
  //     if(this.pcp!=='admin')
  //     return width: 40% ;
  //   }
  // }
}
