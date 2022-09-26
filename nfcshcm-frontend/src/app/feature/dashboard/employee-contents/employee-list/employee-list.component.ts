import { EmployeeService } from './../../services/employee.service';
import { Component, ComponentFactory, ComponentFactoryResolver, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { EmployeeDetailsComponent } from '../employee-details/employee-details.component';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  private sub: any;
  private id: any;
  employeeData: any;
  constructor(private employeeService: EmployeeService,
    private route: ActivatedRoute
    ) { }

  ngOnInit() {
   this.routeId();
  }

  routeId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      this.getEmployeeById(this.id);
      console.log(this.id);
      
    });
  }

  

 
  getEmployeeById(id: number) {
    if (id !=null) {
      this.employeeService.getEmployeeById(id)
        .subscribe(
          data => {
           console.log(data);
           this.employeeData=data;
          },
          error => {
          
          });
    } else {
    }
  }

  
}
