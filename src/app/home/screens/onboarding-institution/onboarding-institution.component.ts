import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-onboarding-institution',
  templateUrl: './onboarding-institution.component.html',
  styleUrls: ['./onboarding-institution.component.css']
})
export class OnboardingInstitutionComponent implements OnInit {

  constructor(private authService: AuthService, private toastr: HotToastService) { }

  ngOnInit(): void {
  }

  institutionForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    website: new FormControl('', [Validators.required]),
    location: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    phoneNo: new FormControl('', [Validators.maxLength(10), Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  })

  onSubmit() {
    if (this.institutionForm.valid) {
      console.log(this.institutionForm.value);
      this.authService.createInstitution({
        name: this.institutionForm.value.name!,
        email: this.institutionForm.value.email!,
        phoneNo: this.institutionForm.value.phoneNo!,
        location: this.institutionForm.value.location!,
        password: this.institutionForm.value.password!,
        website: this.institutionForm.value.website!
      }).subscribe({
        complete: () => {
          console.log("Success");
          this.toastr.success("Email Verification Link Sent!")
        }, error: (e) => {
          console.log("Error is", e);
          this.toastr.error(e.message)
        }
      });
    }
  }

}
