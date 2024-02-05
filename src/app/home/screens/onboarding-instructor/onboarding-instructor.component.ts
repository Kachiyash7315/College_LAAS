import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-onboarding-instructor',
  templateUrl: './onboarding-instructor.component.html',
  styleUrls: ['./onboarding-instructor.component.css']
})
export class OnboardingInstructorComponent implements OnInit {

  
  constructor(private authService: AuthService, private router: Router, private loadingBarService: LoadingBarService, private toastr: HotToastService) { }

  ngOnInit(): void {
  }

  joiningForm = new FormGroup({
    code: new FormControl('', [Validators.required]),
  });


  onSubmit(){
    if(this.joiningForm.valid){
      console.log(this.joiningForm.value);
      this.authService.joinAsInstructor({collegeCode: this.joiningForm.value.code!.replace(/\s/g, '')}).subscribe((data:any)=>{
        console.log(data); 
        this.toastr.success(data.message)
      }, (err)=>{
        this.toastr.error(err.message)
      })
    } 
  }


}
