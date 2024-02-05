import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Assignment } from 'src/app/models/assignment';
import { SubmittedAssignment } from 'src/app/models/submitted_assignment';
import { StudentService } from 'src/app/services/student.service';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent implements OnInit {
  name: string = "Not Found!"
  id: string = "Not Found!"
  todo: Assignment[] = [];
  done: Assignment[] = [];

  constructor(private route: ActivatedRoute, private studentService: StudentService, private toastr: HotToastService) { }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.name = params.get("name")!;
      this.id = params.get("id")!;
    });

    this.handleGetALlAssignments();
  }

  handleGetALlAssignments() {
    this.todo = [];
    this.done = [];
    this.studentService.getLabAssignments(this.id).subscribe((data: any) => {
      console.log(data);
      for (let x of data.pending) {

        // var date1 = new Date(x.dueDate);
        // var date2 = new Date(x.createdAt);
        // var dueDate = date1.getDate().toString() + "/" + date1.getMonth().toString() + "/" + date1.getFullYear().toString();
        // var dateCreated = date2.getDate().toString() + "/" + date2.getMonth().toString() + "/" + date2.getFullYear().toString();
        this.todo.push({ dependencies: x.dependancies, description: x.description, dueDate: x.dueDate, lab: x.lab, labEnvironment: x.labEnvironment, name: x.name, problemStatement: x.problemStatement, programmingLanguage: x.programmingLanguage, ram: x.ram, dataset: x.dataset, datecreated: x.createdAt , id: x._id})
      }

      for (let x of data.submitted){
        // this.done.push({
        //   _id: x._id, __v: x._v, assignmentData: x.assignmentData, assignmentId: x.assignmentId, attempts: x.attempts, createdAt: x.createdAt, language: x.language, remarks: x.remarks, studentId: x.studentId,
        //   updatedAt: x.updatedAt
        // })
        this.done.push({ dependencies: x.dependancies, description: x.description, dueDate: x.dueDate, lab: x.lab, labEnvironment: x.labEnvironment, name: x.name, problemStatement: x.problemStatement, programmingLanguage: x.programmingLanguage, ram: x.ram, dataset: x.dataset, datecreated: x.createdAt , id: x._id})
      }
    }, (err) => {
      console.log(err);
      this.toastr.error(err.message);
    })
  }

}
