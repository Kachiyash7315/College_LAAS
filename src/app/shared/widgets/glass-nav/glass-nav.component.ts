import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-glass-nav',
  templateUrl: './glass-nav.component.html',
  styleUrls: ['./glass-nav.component.css']
})
export class GlassNavComponent implements OnInit {

  constructor(private authService: AuthService) { }
  @Input() title: string = "";
  @Input() type: string = "";

  profile_pic: string = "";
  username: string = "";
  userEmail: string = "";
  ngOnInit(): void {
    if(this.type == "admin"){
      let email = localStorage.getItem("currentLogin");
      this.profile_pic = `https://api.dicebear.com/5.x/initials/svg?seed=${email}`; 
    }else {
      this.username = this.authService.getUserInformation().name;
      this.userEmail = this.authService.getUserInformation().email;
      this.profile_pic = `https://api.dicebear.com/5.x/initials/svg?seed=${this.username}`; 
    }
  }


  handleSignOut(){
    this.authService.handle_signout();
  }

 

  



}
