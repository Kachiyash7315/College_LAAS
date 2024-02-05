import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }

  @Input() title:string = "";


  role: string = ""

  isAuthenticated:boolean = false;

  userInformation: User = {
    name: '',
    email: '',
    phoneNo: '',
    password: '',
    iat: 0,
    exp: 0,
    role: ''
  };

  
  profilePicture: string = "https://api.dicebear.com/5.x/initials/svg?seed=Felix";

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated();
    this.profilePicture = `https://api.dicebear.com/5.x/initials/svg?seed=${this.authService.getUserInformation().name}`; 
    this.userInformation =  this.authService.getUserInformation();  
    this.checkuserRole();
  } 

  checkuserRole(){
    let userInfo = this.authService.getUserInformation();
    this.role = userInfo.role;
  }


  signOutUser(){
    console.log("Signout Triggered"); 
    this.authService.handle_signout();
  }

}
