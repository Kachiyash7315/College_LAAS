import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { InstitutionService } from 'src/app/services/institution.service';

@Component({
  selector: 'app-edit-classroom',
  templateUrl: './edit-classroom.component.html',
  styleUrls: ['./edit-classroom.component.css']
})
export class EditClassroomComponent implements OnInit {

  constructor(private route: ActivatedRoute, private instituteService: InstitutionService, private toastr: HotToastService, private router: Router) { }

  name: string = "";
  id: string = "";

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(params => {
      this.name = params.get("name")!;
      this.id = params.get("id")!;
    });
  }


  editClassRoomForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
  });

  onClassroomFormSubmit() {
    if (this.editClassRoomForm.valid) {
      console.log(this.editClassRoomForm.value);
      this.instituteService.updateClassroom({ name: this.editClassRoomForm.value.name!, id: this.id }).subscribe((data: any) => {
        console.log(data);
        this.toastr.success("Classroom Updated Successfully");
      }, (err) => {
        this.toastr.error(err.message)
      })
    }
  }

  onDeleteClassroom() {
    if(confirm('Are you sure you want to delete this classroom')){
      this.instituteService.deleteClassroom({id: this.id}).subscribe((data: any) => {
        console.log(data);
        this.toastr.success("Classroom Deleted Successfully");
      }, (err) => {
        this.toastr.error(err.message)
      })
    }else{
      console.log("cancelled");
      
    }
   
  }



}
