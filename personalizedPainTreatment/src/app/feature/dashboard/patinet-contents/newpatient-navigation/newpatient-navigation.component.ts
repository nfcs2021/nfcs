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
  role: any;

>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
  constructor(private dataService: DataService) {

  }


  ngOnInit(): void {
    this.role = localStorage.getItem('role');
<<<<<<< HEAD
    console.log("ng.........",this.role);
=======
<<<<<<< HEAD
    
=======
    console.log(this.role);

>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa

>>>>>>> d6c14af15dfd9b46b2623d471b2ef6c874f8b7e4
  }

  //   applyStyle(){
  //     if(this.pcp!=='admin')
  //     return width: 40% ;
  //   }
  // }
}
