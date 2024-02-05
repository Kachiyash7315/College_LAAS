import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Submission } from 'src/app/models/submissions';
import { InstructorService } from 'src/app/services/instructor.service';
import { LabServiceService } from 'src/app/services/lab-service.service';
import hljs from 'highlight.js';

@Component({
  selector: 'app-submissions',
  templateUrl: './submissions.component.html',
  styleUrls: ['./submissions.component.css']
})
export class SubmissionsComponent implements AfterViewInit {

  constructor(private labService: LabServiceService, private instructorService: InstructorService, private route: ActivatedRoute, private toastr: HotToastService) { }
  
  id: string = "";
  assignmentName: string = "";
  submissions:Submission[] = [];

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get("id")!;
      this.handleGetAllSubmissions();

    });
  }

  ngAfterViewInit(): void {
    hljs.highlightAll();
  }


  handleGetAllSubmissions(){
    try {
      this.instructorService.getAllSubmissions(this.id).subscribe((data: any) => {
        console.log(data.data); 
        this.assignmentName = data.data.assignmentData.name;
        this.submissions = data.data.submissions;
      },(err)=>{
        console.log(err);
        this.toastr.error(err.message)
      })
    } catch (err) {
      this.toastr.error(`${err}`)
    }
  }

}
