import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { Classroom } from 'src/app/models/classroom';
import { Instructor } from 'src/app/models/instructor';
import { InstitutionService } from 'src/app/services/institution.service';
import { LabServiceService } from 'src/app/services/lab-service.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private institutionService: InstitutionService, private toastr: HotToastService, private lab: LabServiceService) { }
  classroom: Classroom[] = [];
  instructors: Instructor[] = [];
  

  ngOnInit(): void {
    this.handleGetAllClassroom();
    this.handlegetAllInstructors();
  }

  createLabForm = new FormGroup({
    labName: new FormControl('', [Validators.required]),
    instructor: new FormControl('', [Validators.required]),
    classroom: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
  });

  createClassRoomForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  onLabFormSubmit() {
    if (this.createLabForm.valid) {
      console.log(this.createLabForm.value);
      this.lab.createSoftwareLab({name: this.createLabForm.value.labName! , classroom: this.createLabForm.value.classroom!, instructorId: this.createLabForm.value.instructor!,  year:this.createLabForm.value.year!, noOfStudents:0}).subscribe((data) => {
        console.log(data);
        this.toastr.success("Lab Created Successfuly")
      }, (err) => {
        this.toastr.error(err.message);
      })
    }
  }

  onClassroomFormSubmit() {
    if (this.createClassRoomForm.valid) {
      console.log(this.createClassRoomForm.value);
      this.institutionService.createClassroom({ name: this.createClassRoomForm!.value!.name! }).subscribe((data) => {
        console.log(data);
        this.toastr.success("Classroom Created Successfuly")
        this.handleGetAllClassroom();
      }, (err) => {
        this.toastr.error(err.message);
      })
    }
  }


  handlegetAllInstructors(){
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



  handleGetAllClassroom() {
    this.classroom = [];
    this.institutionService.getAllClassroom().subscribe((data: any) => {
      let classroomList: [] = data.classrooms;
      for (const iterator of classroomList) {
        this.classroom.push(iterator)
      }
      console.log(this.classroom);
    }, (err) => {
      this.toastr.error(err.message)
    })
  }

  

}
