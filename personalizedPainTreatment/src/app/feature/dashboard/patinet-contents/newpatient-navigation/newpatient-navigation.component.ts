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
  
  constructor(private dataService: DataService) {
    
  }
  

  ngOnInit(): void {
    this.pcp = localStorage.getItem('pcpData');
<<<<<<< HEAD
    console.log('buttons................' + localStorage.getItem('token'));
=======
    
>>>>>>> cbd0b9e05307126babb8c908a9a8829735784c83
  }

  //   applyStyle(){
  //     if(this.pcp!=='admin')
  //     return width: 40% ;
  //   }
  // }
}
