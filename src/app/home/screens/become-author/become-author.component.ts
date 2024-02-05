import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-become-author',
  templateUrl: './become-author.component.html',
  styleUrls: ['./become-author.component.css']
})
export class BecomeAuthorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  becomeauthorForm = new FormGroup({
    contactNumber: new FormControl('', [Validators.required]),
    about: new FormControl('',  [Validators.required]),
  });


  onSubmit(): void{
    if(this.becomeauthorForm.valid){
      console.log(this.becomeauthorForm.value);   
    }
  }


}
