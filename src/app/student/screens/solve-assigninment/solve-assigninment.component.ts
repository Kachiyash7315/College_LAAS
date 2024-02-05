import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Assignment } from 'src/app/models/assignment';
import { StudentService } from 'src/app/services/student.service';
import { Endpoints } from 'src/app/utils/endpoints';

@Component({
  selector: 'app-solve-assigninment',
  templateUrl: './solve-assigninment.component.html',
  styleUrls: ['./solve-assigninment.component.css']
})
export class SolveAssigninmentComponent implements OnInit {

  constructor(private route: ActivatedRoute, private studentService: StudentService, private toastr: HotToastService) { }

  id: string = "";
  assignment?: Assignment;
  token?: string;



  wayToEnvironment?: string;
  ngOnInit(): void {
    this.handleGetAssignmentDetails();
    this.token = localStorage.getItem("token")!;
  }


  handleGetAssignmentDetails() {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get('id')!;
      this.studentService.getAssignmentDetails(this.id).subscribe((data: any) => {
        console.log(data); 
        this.assignment = {datecreated: data.data.assignmentData.createdAt,dependencies: data.data.assignmentData.dependancies,description: data.data.assignmentData.description,dueDate: data.data.assignmentData.dueDate,id: data.data.assignmentData._id,lab: data.data.assignmentData.lab,labEnvironment: data.data.assignmentData.labEnvironment,name: data.data.assignmentData.name,problemStatement: data.data.assignmentData.problemStatement,programmingLanguage: data.data.assignmentData.programmingLanguage,ram: data.data.assignmentData.ram,dataset:data.data.assignmentData.dataset}
        console.log(this.assignment);
        if(this.assignment.labEnvironment === "Compiler"){
          this.wayToEnvironment = Endpoints.wayToCompiler;
        }
      }, error => {
        console.error(error);
        // handle errors
        this.toastr.error(error.message);
      })
    });

  }

}
