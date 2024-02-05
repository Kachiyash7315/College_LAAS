import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Submission } from 'src/app/models/submissions';
import { AuthService } from 'src/app/services/auth.service';
import { InstructorService } from 'src/app/services/instructor.service';
import { LabServiceService } from 'src/app/services/lab-service.service';
import { Endpoints } from 'src/app/utils/endpoints';

@Component({
  selector: 'app-check-submission',
  templateUrl: './check-submission.component.html',
  styleUrls: ['./check-submission.component.css']
})
export class CheckSubmissionComponent implements OnInit {

  constructor(private labService: LabServiceService, private instructorService: InstructorService, private route: ActivatedRoute, private toastr: HotToastService, private authService: AuthService) { }

  id: string = "";
  name: string = "";
  email: string = "";
  wayToCompiler: string = "";
  token:string = "";


  submission?: {
    _id: string;
    assignmentId: string;
    submissionId:string;
    studentId: string;
    assignmentData: string;
    language: string;
    attempts: number;
    remarks: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  };

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get("id")!;
      this.name = params.get("name")!;
      this.email = params.get("email")!;
      this.wayToCompiler = Endpoints.wayToCompiler;
      this.token = this.authService.getToken();
      this.handleGetSubmission();
    });
  }

  reviewForm = new FormGroup({
    message: new FormControl('', [Validators.required])
  });



  handleGetSubmission() {
    try {
      this.instructorService.getSubmissionById(this.id).subscribe((data: any) => {
        console.log(data.data);
        this.submission = data.data.submission[0];
        console.log(this.submission);
      }, (err) => {
        console.log(err);
        this.toastr.error(err.message)
      })
    } catch (err) {
      this.toastr.error(`${err}`)
    }
  }


  handlePostReview() {
    if (this.reviewForm.valid) {
      this.instructorService.addReviewForAssignment({ remark: this.reviewForm.value.message!, submissionId: this.id }).subscribe((data: any) => {
        console.log(data.data);
        this.toastr.success("Review Added Successfully");
        this.handleGetSubmission()
      }, (err) => {
        console.log(err);
        this.toastr.error(err.message)
      })
    }
  }
}
