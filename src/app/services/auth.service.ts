import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError, retry } from 'rxjs/operators';
import { Endpoints } from '../utils/endpoints';
import { Login } from '../models/login';
import { SignUp } from '../models/signup';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
import { User } from '../models/user';
import { InstituteSignUp } from '../models/institutionSignup';
import { HandleErrorService } from '../helpers/handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router, private errorService: HandleErrorService) { }

  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');    // Check whether the token is expired and return
    if (token != null) {
      return !this.jwtHelper.isTokenExpired(token!);
    } else {
      return false;
    }
  }

  public getUserInformation(): User {
    const token = localStorage.getItem('token');
    const decodedToken: any = jwt_decode(token!);
    return { name: decodedToken.name, email: decodedToken.email, exp: decodedToken.exp, iat: decodedToken.iat, password: decodedToken.password, phoneNo: decodedToken.phoneNo, role: decodedToken.role };
  }


  public getToken(): any {
    return localStorage.getItem("token");
  }

  public getDecodedTokenInfo(token: string) {
    const decodedToken: any = jwt_decode(token!);
    return decodedToken;
  }

  handle_login(model: Login) {
    console.log("Triggered");
    console.log(Endpoints.login);
    return this.http.post(Endpoints.login, model).pipe(
      catchError(this.errorService.handleError)
    );
  }

  handle_create_accout(model: SignUp) {
    return this.http.post(Endpoints.signup, model).pipe(
      catchError(this.errorService.handleError)
    );
  }

  handle_verify_email(token: string) {
    return this.http.get(Endpoints.verifyEmail + token).pipe(
      catchError(this.errorService.handleError)
    );
  }

  handle_verify_institution_email(token: string) {
    return this.http.get(Endpoints.verifyInstitutionEmail + token).pipe(
      catchError(this.errorService.handleError)
    );
  }

  createInstitution(model: InstituteSignUp) {
    return this.http.post(Endpoints.createInstitution, model).pipe(
      catchError(this.errorService.handleError)
    );
  }

  loginAsInstitute(model: any) {
    return this.http.post(Endpoints.institutionLogin, model).pipe(
      catchError(this.errorService.handleError)
    );
  }

  joinAsInstructor(model : {collegeCode: string}){
    return this.http.post(Endpoints.joinInstitutionAsInstructor, model).pipe(
      catchError(this.errorService.handleError)
    );
  }


  
  

  handle_signout() {
    localStorage.removeItem("token");
    this.router.navigateByUrl('/auth');
  }
}
