import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PatientService } from '../../services/patient.service';


@Component({
  selector: 'app-patientdata',
  templateUrl: './patientdata.component.html',
  styleUrls: ['./patientdata.component.css']
})
export class PatientdataComponent implements OnInit {

  patientList: any;
  totalLength: any;
  page: number = 1
 routerId:any;
  constructor(private patientservice: PatientService,
    private route:ActivatedRoute
    ) { }

  ngOnInit(): void {
this.routeId();

  }

  routeId() {
    this.route.params.subscribe(params => {
      this.routerId = +params['id']; // (+) converts string 'id' to a number
      this.retrivalpatientList(this.routerId);
      console.log(this.routerId);

    });
  }
  retrivalpatientList(id:any) {
    this.patientservice.getById(id)
      .subscribe((data) => {
        this.patientList = data;
        console.log(data);

      },
        error => {
          console.log(error)
        });
  }
}
