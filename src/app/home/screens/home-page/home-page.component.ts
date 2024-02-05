import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  constructor(private authService: AuthService) { }

  role: any = "";
  ngOnInit(): void {
    this.handleGetUserInformation();
  }

  handleGetUserInformation() {
    let info = this.authService.getUserInformation();
    this.role = info.role;
    console.log("Role is", this.role);
  }


  asStudent() {

  }

  asInstructor() {

  }

  createInstitution() {

  }



}
