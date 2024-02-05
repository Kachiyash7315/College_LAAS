// src/app/auth/auth-guard.service.tsimport { Injectable } from '@angular/core';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRoute } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HotToastService } from '@ngneat/hot-toast';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InstituteGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private route: ActivatedRoute, public jwtHelper: JwtHelperService, public toastr: HotToastService) { }
  instituteId: string = "";
  canActivate(): boolean {
    let admin_token = localStorage.getItem("admin_token");
    let user_token = localStorage.getItem('token');

    if(admin_token != null && user_token !=null){
      let decoded_user_token = this.auth.getDecodedTokenInfo(user_token!);
      let decoded_admin_token = this.auth.getDecodedTokenInfo(admin_token!);

      console.log(decoded_user_token);
      console.log(decoded_admin_token);

      if(decoded_user_token.id === decoded_admin_token.ownerId){
        if(this.jwtHelper.isTokenExpired(user_token)){
          this.toastr.error("Please Login to proceed")
          this.router.navigate(['auth'])
          return false;
        }
  
        if(this.jwtHelper.isTokenExpired(admin_token)){
          this.toastr.error("Institution Login Session Expired, Please login Again");
          this.router.navigate(['/auth/'])
          return false;
        }

        return true;


      }else{
        this.toastr.error("Access Denied! You donot have ownership of this asset")
        return false;
      }
      return false;
    }else{
      this.toastr.error("Please Login to proceed")
      this.router.navigate(['auth'])
      return false;
    }

    

  }
}

function jwt_decode(arg0: string): any {
  throw new Error('Function not implemented.');
}
