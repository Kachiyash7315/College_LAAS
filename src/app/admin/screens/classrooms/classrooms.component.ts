import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Classroom } from 'src/app/models/classroom';
import { InstitutionService } from 'src/app/services/institution.service';

@Component({
  selector: 'app-classrooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {
  

  classroom: Classroom[] = [];
  constructor(private institutionService: InstitutionService, private toastr: HotToastService) { }

  ngOnInit(): void {
    this.handleGetAllClassroom()
  }

  handleGetAllClassroom(){
    this.institutionService.getAllClassroom().subscribe((data: any)=>{
     let classroomList:[] = data.classrooms;
     for (const iterator of classroomList) {
      this.classroom.push(iterator)
     }
     console.log(this.classroom);
    }, (err)=>{
      this.toastr.error(err.message)
    })
  }

}
