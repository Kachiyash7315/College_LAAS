// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from '@angular/router';
// import { HotToastService } from '@ngneat/hot-toast';
// import { LoadingBarService } from '@ngx-loading-bar/core';
// import { AuthService } from 'src/app/services/auth.service';

// @Component({
//   selector: 'app-signup',
//   templateUrl: './signup.component.html',
//   styleUrls: ['./signup.component.css']
// })
// export class SignupComponent implements OnInit {

//   constructor(private authService: AuthService, private router: Router, private loadingBarService: LoadingBarService, private toastr: HotToastService) { }

//   ngOnInit(): void {
//   }

//   signupForm = new FormGroup({
//     username: new FormControl('', [Validators.required]),
//     email: new FormControl('', [Validators.email, Validators.required]),
//     phoneNo: new FormControl('', [Validators.maxLength(10), Validators.required]),
//     password: new FormControl('', [Validators.required, Validators.minLength(7)]),
//   });

//   startLoading(){
//     this.loadingBarService.start();
//   }

//   stopLoading(){
//     this.loadingBarService.stop();
//   }

//   onSubmit(){
    
//     if (this.signupForm.valid) {
      
//       console.log(this.signupForm.value);
//       this.startLoading()
//       this.authService.handle_create_accout({email: this.signupForm.value.email!, password: this.signupForm.value.password!, name: this.signupForm.value.username!, phoneNo: this.signupForm.value.phoneNo!}).subscribe((response: any) => {
//         console.log(response);
//         this.stopLoading()
//         this.router.navigateByUrl('/auth/verify-email')
//       },error => this.toastr.error(error.message))
//       this.stopLoading()
//     }
//   }
// }




//new 
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AuthService } from 'src/app/services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private loadingBarService: LoadingBarService, private toastr: HotToastService) { }

  ngOnInit(): void {
  }

  signupForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNo: new FormControl('', [Validators.maxLength(10), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });

  startLoading() {
    this.loadingBarService.start();
  }

  stopLoading() {
    this.loadingBarService.stop();
  }

  onSubmit() {
    if (this.signupForm.valid) {

      const email = this.signupForm.value.email ?? '';

      // Check if the email domain is valid
      if (!email.endsWith('@moderncoe.edu.in')) {
        // Display an error message or handle it as needed
        this.toastr.error('Invalid email domain. Please use an email ending with @moderncoe.edu.in.');
        return;
      }

      console.log(this.signupForm.value);
      this.startLoading();

      this.authService.handle_create_accout({
        email: email,
        password: this.signupForm.value.password!,
        name: this.signupForm.value.username!,
        phoneNo: this.signupForm.value.phoneNo!
      }).subscribe(
        (response: any) => {
          console.log(response);
          this.stopLoading();
          this.router.navigateByUrl('/auth/verify-email');
        },
        (error: HttpErrorResponse) => {
          if (error.status === 409) {
            this.toastr.error('This email is already registered.');
          } else {
            
            this.toastr.error('An unexpected error occurred. Please try again later.');
          }
          this.stopLoading();
        }
      );
    }
  }
}
