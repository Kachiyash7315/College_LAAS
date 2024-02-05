import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { LabServiceService } from 'src/app/services/lab-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { InstructorService } from 'src/app/services/instructor.service';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';




@Component({
  selector: 'app-lab-studio',
  templateUrl: './lab-studio.component.html',
  styleUrls: ['./lab-studio.component.css']
})
export class LabStudioComponent implements OnInit {
  assignments: Assignment[] = [];
  public Editor: any = ClassicEditor;
  constructor(private labService: LabServiceService, private instructorService: InstructorService, private route: ActivatedRoute, private toastr: HotToastService) { }
  id: string = "";
  placeHolder = "Eg. pip3 install numpy"
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get("id")!;
    });

    this.handleGetALlAssignments();
  }





  assignment = new FormGroup({
    assignmentName: new FormControl('', [Validators.required]),
    problemStatement: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
    labtype: new FormControl('Compiler', [Validators.required]),
    programmingLaguage: new FormControl('Any'),
    ram: new FormControl('40', [Validators.required]),
    dependancy: new FormControl([]),
    date: new FormControl('', [Validators.required]),
  });




  onSubmit() {
    let dependancies: string[] = [];
    if (this.assignment.valid) {
      if (this.assignment.value.dependancy!.length > 0) {
        let key: any;
        for (key of this.assignment.value.dependancy!) {
          dependancies.push(key.value!)
        }
      }
    }


  
    this.instructorService.createAssignment({ lab: this.id, dependencies: dependancies, description: this.assignment.value.description!, dueDate: this.assignment.value.date!, labEnvironment: this.assignment.value.labtype!, name: this.assignment.value.assignmentName!, problemStatement: this.assignment.value.problemStatement!, programmingLanguage: this.assignment.value.programmingLaguage!, ram: this.assignment.value.ram!, datecreated: null, id: "d" }).subscribe((data) => {
      console.log(data);
      this.toastr.success("Assignment Created Successfully");
      this.handleGetALlAssignments();
    }, (err) => {
      console.log(err);
      this.toastr.error(err.message);
    });
  }



  handleGetALlAssignments() {
    this.assignments = [];
    this.instructorService.getLabAssignments(this.id).subscribe((data: any) => {
      console.log(data);
      for (let x of data.data){
        var date1 = new Date(x.dueDate);
        var date2 = new Date(x.createdAt);
        var dueDate = date1.getDate().toString() + "/" + date1.getMonth().toString() + "/" + date1.getFullYear().toString();
        var dateCreated = date2.getDate().toString() + "/" + date2.getMonth().toString() + "/" + date2.getFullYear().toString();
        this.assignments.push({dependencies: x.dependancies,description: x.description,dueDate: dueDate,lab: x.lab,labEnvironment: x.labEnvironment,name: x.name,problemStatement: x.problemStatement,programmingLanguage: x.programmingLanguage,ram: x.ram,dataset: x.dataset, datecreated: dateCreated, id: x._id})
      }
    }, (err) => {
      console.log(err);
      this.toastr.error(err.message);
    })
  }

}





