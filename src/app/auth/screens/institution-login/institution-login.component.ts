import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HotToastService } from '@ngneat/hot-toast';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-institution-login',
  templateUrl: './institution-login.component.html',
  styleUrls: ['./institution-login.component.css']
})
export class InstitutionLoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private toastr: HotToastService, private loadingBarService: LoadingBarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }



  loginForm = new FormGroup({
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(7)]),
  });


  onSubmit() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value);
      this.authService.loginAsInstitute({ 'email': this.loginForm.value.email, 'password': this.loginForm.value.password, 'role': 'institute' }).subscribe((data: any) => {
        console.log("Data is", data);
        localStorage.setItem('admin_token', data!.token!)
        let decodeToken = this.authService.getDecodedTokenInfo(data!.token!);
        localStorage.setItem("currentLogin", decodeToken.name);
        this.router.navigate(['/dashboard/admin']);
      })
    }
  }

}
