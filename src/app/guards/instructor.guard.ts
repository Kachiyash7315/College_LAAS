import { Injectable } from '@angular/core';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class InstructorGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router, private route: ActivatedRoute, public jwtHelper: JwtHelperService, public toastr: HotToastService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    let user_token = localStorage.getItem('token');
    if (user_token != null) {
      let decoded_user_token = this.auth.getDecodedTokenInfo(user_token!);
      if (this.jwtHelper.isTokenExpired(user_token)) {
        this.toastr.error("Please Login to proceed")
        this.router.navigate(['auth'])
        return false;
      }
      if (decoded_user_token.role != "instructor") {
        this.toastr.error("You are not an instructor");
        this.router.navigate(['auth'])
        return false;
      }
    } else {
      this.toastr.error("Please Login to proceed")
      this.router.navigate(['auth'])
      return false
    }
    return true;
  }

}
