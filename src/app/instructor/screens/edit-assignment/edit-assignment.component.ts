import { Component, OnInit } from '@angular/core';
import { Assignment } from 'src/app/models/assignment';
import { LabServiceService } from 'src/app/services/lab-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { InstructorService } from 'src/app/services/instructor.service';
import { ActivatedRoute } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-edit-assignment',
  templateUrl: './edit-assignment.component.html',
  styleUrls: ['./edit-assignment.component.css']
})
export class EditAssignmentComponent implements OnInit {



  assignments: Assignment[] = [];
  public Editor: any = ClassicEditor;
  constructor(private labService: LabServiceService, private instructorService: InstructorService, private route: ActivatedRoute, private toastr: HotToastService, private router: Router, private location: Location) { }
  id: string = "";
  placeHolder = "Eg. pip3 install numpy"
  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.id = params.get("id")!;
    });
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
  }


  deleteAssignment() {
    console.log(this.id);
    this.instructorService.deleteAssignment(this.id).subscribe((data) => {
      console.log(data);
      this.toastr.success("Assignment Deleted Successfully");
      this.location.back();
      // this.router.navigate(['../'], { relativeTo: this.route });
    }, (err) => {
      console.log(err);
      this.toastr.error("Unable to process your request");
    })

  }




}
