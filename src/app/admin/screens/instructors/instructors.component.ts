import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Instructor } from 'src/app/models/instructor';
import { InstitutionService } from 'src/app/services/institution.service';

@Component({
  selector: 'app-instructors',
  templateUrl: './instructors.component.html',
  styleUrls: ['./instructors.component.css']
})
export class InstructorsComponent implements OnInit {

  constructor(private institutionService: InstitutionService, private toastr: HotToastService) { }

  instructors: Instructor[] = [];
  ngOnInit(): void {
    this.getAllInstructors()
  }

  getAllInstructors(){
    this.instructors = [];
    this.institutionService.getAllInstructors().subscribe((data: any)=>{
      console.log(data);
      for (let x of data.data){
        this.instructors.push({__v: x.__v,_id:x._id,college: x.college,email: x.email,isEmailVerified: x.isEmailVerified,name: x.name,password: x.password,requestStatus: x.requestStatus,role: x.role})
      }
    },(err)=>{
      this.toastr.error(err.message);
    })
  }

  

}
