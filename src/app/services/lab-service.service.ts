import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, Observable } from 'rxjs';
import { HandleErrorService } from '../helpers/handle-error.service';
import { Assignment } from '../models/assignment';
import { Lab } from '../models/lab';
import { Endpoints } from '../utils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class LabServiceService {
  
  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, public errorService: HandleErrorService ) { }

  createSoftwareLab(model: Lab){
    return this.http.post(Endpoints.lab, model).pipe(
      catchError(this.errorService.handleError)
    );
  }


  editSoftwareLab(model: Lab){
    return this.http.patch(Endpoints.lab, model).pipe(
      catchError(this.errorService.handleError)
    );
  }




  getAllLabs(){
    return this.http.get(Endpoints.lab).pipe(
      catchError(this.errorService.handleError)
    );
  }
  





}
