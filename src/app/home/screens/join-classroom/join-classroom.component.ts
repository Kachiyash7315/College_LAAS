import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-join-classroom',
  templateUrl: './join-classroom.component.html',
  styleUrls: ['./join-classroom.component.css']
})
export class JoinClassroomComponent implements OnInit {

  constructor(private authService: AuthService, private studentService: StudentService, private toastr: HotToastService) { }

  role = "";

  classrooms: { _id: string, name: string, classroomId: string }[] = [];


  ngOnInit(): void {
    this.role = this.authService.getUserInformation().role;
    if (this.role === "student") {
      this.handleGetAllClassroomsEnrolled();
    }
  }

  classroomForm = new FormGroup({
    classroomId: new FormControl('', [Validators.required]),
  });



  onSubmit() {
    if (this.classroomForm.valid) {
      this.studentService.joinClassroomRequest({ classroomId: this.classroomForm.value.classroomId!.replace(/\s/g, '') }).subscribe((data: any) => {
        console.log(data);
        this.toastr.success("Classroom Joined Successfully")
        this.handleGetAllClassroomsEnrolled();
      }, (err: any) => {
        console.log(err);
        this.toastr.error(err.message)
      })
    }
  }



  handleGetAllClassroomsEnrolled() {
    this.classrooms = [];
    this.studentService.getAllEnrolledClassrooms().subscribe((data: any) => {
      console.log(data);
      for (let cLass of data.data) {
        this.classrooms.push({ _id: cLass._id, classroomId: cLass.classroomId, name: cLass.name });
      }
    }, (err: any) => {
      console.log(err);
    })
  }





}
