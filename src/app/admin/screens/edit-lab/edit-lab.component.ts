import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-lab',
  templateUrl: './edit-lab.component.html',
  styleUrls: ['./edit-lab.component.css']
})
export class EditLabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  editLabForm = new FormGroup({
    labName: new FormControl('', [Validators.required]),
    instructor: new FormControl('', [Validators.required]),
    classroom: new FormControl('', [Validators.required]),
    year: new FormControl('', [Validators.required]),
  });

  onLabFormSubmit(){
    
  }

}
