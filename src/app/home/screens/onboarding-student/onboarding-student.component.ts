import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AuthService } from 'src/app/services/auth.service';
import { InstitutionService } from 'src/app/services/institution.service';

@Component({
  selector: 'app-onboarding-student',
  templateUrl: './onboarding-student.component.html',
  styleUrls: ['./onboarding-student.component.css']
})
export class OnboardingStudentComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private loadingBarService: LoadingBarService, private toastr: HotToastService, private institutionService: InstitutionService) { }

  ngOnInit(): void {
  }

  joiningForm = new FormGroup({
    collegeCode: new FormControl('', [Validators.required]),
  });


  onSubmit(){
    if(this.joiningForm.valid){
      console.log(this.joiningForm.value);
      this.institutionService.joinInstitutionAsStudent({collegeCode: this.joiningForm.value.collegeCode!.replace(/\s/g, '')}).subscribe((data: any)=>{
        console.log(data); 
        this.toastr.success(`${data.message}`)
      },
      (error)=>{
        console.log(typeof(error));  
        this.toastr.error(`${error.message}`)
      }
      )
    } 
  }



}
