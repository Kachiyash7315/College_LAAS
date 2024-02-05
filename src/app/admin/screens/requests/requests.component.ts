import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Instructor } from 'src/app/models/instructor';
import { InstitutionService } from 'src/app/services/institution.service';

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  constructor(private institutionService: InstitutionService, private toastr: HotToastService) { }
  

  instructors: Instructor[] = [];
  ngOnInit(): void {
    this.getAllInstructorRequests();
  }


  getAllInstructorRequests(){
    this.instructors = [];
    this.institutionService.getAllInstructorsRequests().subscribe((data: any)=>{
      console.log(data);
      for (let x of data.data){
        this.instructors.push({__v: x.__v,_id:x._id,college: x.college,email: x.email,isEmailVerified: x.isEmailVerified,name: x.name,password: x.password,requestStatus: x.requestStatus,role: x.role})
      }
    },(err)=>{
      this.toastr.error(err.message);
    })
  }

  handleAcceptInstructorRequest(instructorId: string, status: boolean){
    this.institutionService.acceptInstructorRequest({instructorId: instructorId,status: status}).subscribe((data: any)=>{
      console.log(data);
      this.getAllInstructorRequests();
      this.toastr.success("Request Accepted Successfully")
    },(err)=>{
      this.toastr.error(err.message);
    })
  }


}
