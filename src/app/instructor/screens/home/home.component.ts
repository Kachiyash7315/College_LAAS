import { Component, OnInit } from '@angular/core';
import { HotToastService } from '@ngneat/hot-toast';
import { InstructorService } from 'src/app/services/instructor.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private instructorService: InstructorService, private toastr: HotToastService) { }

  labsAppointed: {
    _id: string;
    name: string;
    instructorAppointed: string;
    admin: string;
    originclassroom: string;
    academicYear: number;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }[] = [];
  ngOnInit(): void {

    this.handleGetAllAppointedLabs();
  }

  handleGetAllAppointedLabs() {
    this.instructorService.getAllAppointedLabs().subscribe((data: any) => {
      for (const iterator of data.data) {
        this.labsAppointed.push(iterator)
      }
      console.log(this.labsAppointed);
    }, (err) => {
      this.toastr.error(err.message)
    })
  }

}
