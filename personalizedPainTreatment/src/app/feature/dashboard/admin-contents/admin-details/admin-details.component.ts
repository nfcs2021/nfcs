import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { FrontdeskService } from '../../services/frontdesk.service';

@Component({
  selector: 'app-admin-details',
  templateUrl: './admin-details.component.html',
  styleUrls: ['./admin-details.component.css']
})
export class AdminDetailsComponent implements OnInit {
  pcp: string;
  adminData: any;
  routerId: any;
  retrivalId: any;
  constructor(
    private service: AdminService,
    private route: ActivatedRoute,
    private frontdeskService: FrontdeskService,
    private router: Router
  ) {}
  id: any;
  ngOnInit(): void {
    console.log(localStorage.getItem('name'));
    this.id = localStorage.getItem('id');
    if (this.route.snapshot.paramMap.get('id')) {
      this.retrvieAdminList(this.route.snapshot.paramMap.get('id'));
    } else {
      this.service.getAdminData(localStorage.getItem('id')).subscribe(
        (data) => {
          console.log('frontdeskdetails..................' + data);
          this.adminData = data;
        },
        (err) => {
          console.log(err);
        }
      );
    }
  }
  retrvieAdminList(id: any) {
    this.service.getAdminData(id).subscribe((data) => {
      console.log(data);
      this.adminData = data;
    });
  }
  retriveLoginData(id: any) {}

  // downLoadFile() {
  //   console.log(this.frontDeskData.Email);
  //   this.dataService
  //     .downloadFile(this.frontDeskData.Email)
  //     .subscribe((data) => {
  //       console.log('download[Symbol]...............', data);
  //       const blob = new Blob([data.body.Emp_id_doc]);
  //       const file = new File([blob], this.frontDeskData.Emp_id_doc);
  //       FileSaver.saveAs(file);
  //     });
  // }
  resetPassword() {
    this.router.navigate([
      '/frontdesk/changepassword' + this.adminData.Email,
    ]);
  }

}
