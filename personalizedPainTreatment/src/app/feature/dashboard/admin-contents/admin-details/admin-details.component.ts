import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as FileSaver from 'file-saver';
import { AdminService } from '../../services/admin.service';
import { DataService } from '../../services/data.service';
import { FrontdeskService } from '../../services/frodesk.service';


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
  imageUrl:any;
  constructor(
    private service: AdminService,
    private route: ActivatedRoute,
    private frontdeskService: FrontdeskService,
    private router: Router,
    private http:HttpClient,
    private dataService:DataService
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
          this.adminData = data;
          let imageBinary = data.Profile_image; //image binary data response from api
          //  let imageBase64String= btoa(imageBinary);
            this.imageUrl = 'data:image/jpeg;base64,' + imageBinary;
           
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
    },err =>{
      console.log(err);
      
    });
  }
  retriveLoginData(id: any) {}

  download(data:any){
    console.log("data");
    return this.http.get('http://127.0.0.1:8000/api/Idproof/download/'+data.id,{responseType:'arraybuffer'})
      .subscribe(res => {
        const blob = new Blob([res], {type: 'application/octet-stream'});
        FileSaver.saveAs(blob, data.Id_proof_Name);
      }, err => {
        console.log(err);
    });
    
      }
    
      downloadEmployeeID(data:any){
        console.log("data");
        return this.http.get('http://127.0.0.1:8000/api/EmpId/download/'+data.id,{responseType:'arraybuffer'})
          .subscribe(res => {
            const blob = new Blob([res], {type: 'application/octet-stream'});
            FileSaver.saveAs(blob, data.Emp_id_doc_Name);
          }, err => {
            console.log(err);
        });
        
          }
    
          downloadProfileImage(data:any){
            console.log("data");
            return this.http.get('http://127.0.0.1:8000/api/Images/download/'+data.id,{responseType:'arraybuffer'})
              .subscribe(res => {
                const blob = new Blob([res], {type: 'application/octet-stream'});
                FileSaver.saveAs(blob, data.Profile_image_Name);
              }, err => {
                console.log(err);
            });
          }
  resetPassword() {
    const data = {
      User_Name: this.adminData.User_Name,
    };
    this.dataService.requestotp(data).subscribe(
      (data) => {
        console.log(data);
        this.router.navigateByUrl(
          '/frontdesk/resetpassword/' + this.adminData.User_Name,
        );
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
