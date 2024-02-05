import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private loadingBarService: LoadingBarService, private toastr: HotToastService) { }

  ngOnInit(): void {
  }


  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });

  startLoading(){
    this.loadingBarService.start();
  }

  stopLoading(){
    this.loadingBarService.stop();
  }


  onSubmit() {
    if (this.loginForm.valid) {
      this.startLoading()
      this.authService.handle_login({ email: this.loginForm.value.email!, password: this.loginForm.value.password!}).subscribe((response: any) => {
        console.log(response);
        localStorage.setItem("token", response.token);
        this.stopLoading()
        this.router.navigateByUrl('/')
      },(err)=>{
        this.stopLoading()
        this.toastr.error("Invalid Username or Password")
      })
    }
  }

}
