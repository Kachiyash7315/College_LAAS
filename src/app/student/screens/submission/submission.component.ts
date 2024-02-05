import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubmittedAssignment } from 'src/app/models/submitted_assignment';
import { AuthService } from 'src/app/services/auth.service';
import { StudentService } from 'src/app/services/student.service';
import { Endpoints } from 'src/app/utils/endpoints';


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.css']
})
export class SubmissionComponent implements OnInit {

  constructor(private studentService: StudentService, private route: ActivatedRoute, private authService: AuthService) { }

  ngOnInit(): void {
    this.waytoCompiler = Endpoints.wayToCompiler;
    this.token = this.authService.getToken();
    this.getSubmissionDetails();
  }

  id:string = "";
  name:string = "";
  ps:string = "";
  submission?:SubmittedAssignment;
  waytoCompiler:string = "";
  token: string = ""
 


  getSubmissionDetails(){
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id')!;
      this.name = params.get('name')!;
      this.ps = params.get('ps')!;
      this.studentService.getSubmissionDetails(this.id).subscribe((data:any)=>{
        console.log(data);
        this.submission = data.data;
      },(err)=>{
        console.log(err);
        
      })
    });
    
  }


}
