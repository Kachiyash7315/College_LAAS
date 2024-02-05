import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { Lab } from 'src/app/models/lab';
import { LabServiceService } from 'src/app/services/lab-service.service';

@Component({
  selector: 'app-labs',
  templateUrl: './labs.component.html',
  styleUrls: ['./labs.component.css']
})
export class LabsComponent implements OnInit {

  constructor(private labServce: LabServiceService, private toastr: HotToastService) { }
  labs:{name: string, date: string, instructor: string, noOfStudents: number, classroom: string}[] = []

  ngOnInit(): void {
    this.handlegetAllLabs();
  }


  handlegetAllLabs(){
    this.labServce.getAllLabs().subscribe((data: any)=>{
      console.log(data);
      for(let x of data.data){
        this.labs.push({name: x.name, date: x.creationDate, instructor: x.instructor.name, noOfStudents: x.studentCount, classroom: x.classroom.name})
      }
    },
    (err)=>{
      this.toastr.error(err.message);
    })
  }

}
