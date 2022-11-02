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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
    console.log("ng.........",this.role);
=======
<<<<<<< HEAD
    
=======
>>>>>>> 33a4ce61c45c4da48ebd771e64a35a29d0e45602
    console.log(this.role);

>>>>>>> f2688e6484124b9ba1467097f7342ae2703aedfa

  }

  //   applyStyle(){
  //     if(this.pcp!=='admin')
  //     return width: 40% ;
  //   }
  // }
}
