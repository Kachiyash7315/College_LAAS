import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Assignment } from 'src/app/models/assignment';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-classroom',
  templateUrl: './classroom.component.html',
  styleUrls: ['./classroom.component.css']
})
export class ClassroomComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService, private toastr: HotToastService) { }

  name: string = "Not Found!"
  id: string = "Not Found!"

  labs: {
    _id: string;
    name: string;
    academicYear: number;
    createdAt: Date;
    updatedAt: Date;
  }[] = []

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.name = params.get("name")!;
      this.id = params.get("id")!;
    });

    this.handlegetAllLabs(this.id);
  }

  handlegetAllLabs(id: string) {
    this.studentService.getAllLabsWithinClassroom(id).subscribe((data: any) => {
      console.log(data);
      for (const lab of data.data) {
        this.labs.push({ _id: lab._id, academicYear: lab.academicYear, createdAt: lab.createdAt, name: lab.name, updatedAt: lab.updatedAt });
      }
    }, (err) => {
      this.toastr.error(err.message);
    })
  }

  

}
