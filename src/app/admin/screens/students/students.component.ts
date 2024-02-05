import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/models/student';
import { InstitutionService } from 'src/app/services/institution.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {


  students: Student[] = [];
  constructor(private institutionService: InstitutionService) { }

  ngOnInit(): void {
    this.handleGetAllStudents();
  }


  handleGetAllStudents() {
    this.students = [];
    this.institutionService.getAllStudents().subscribe((data: any) => {
      console.log(data);
      for (let student of data!.data!) {
        let x: Student = {
          name: student.name, _id: student._id, classroomsJoined: student.classroomsJoined, college: student.college, email: student.email, isEmailVerified: student.isEmailVerified, role: student.role, studentData: student.studentData, password: "",
          __v: 0
        }
        this.students.push(x);
      }
    }, (err) => {
      console.log(err);
    });
  }

}
