import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HotToastService } from '@ngneat/hot-toast';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HandleErrorService } from '../helpers/handle-error.service';
import { Institute } from '../models/institute';
import { InstitutionStudent } from '../models/joinInstitutionAsStudent';
import { Endpoints } from '../utils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class InstitutionService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router, private toastr: HotToastService, public errorService: HandleErrorService) { }


  getAllCreatedInstitutions() {
    return this.http.get(Endpoints.getAllInstitution).pipe(
      catchError(this.errorService.handleError)
    );
  }


  getAllClassroom() {
    return this.http.get(Endpoints.classrooms).pipe(
      catchError(this.errorService.handleError)
    );
  }

  createClassroom(model: { "name": string }) {
    return this.http.post(Endpoints.classrooms, model).pipe(
      catchError(this.errorService.handleError)
    );
  }

  updateClassroom(model: { "name": string; "id": string }) {
    return this.http.patch(Endpoints.classrooms, model).pipe(
      catchError(this.errorService.handleError)
    );
  }

  deleteClassroom(model: { "id": string }) {
    return this.http.delete(Endpoints.classrooms, { body: model }).pipe(
      catchError(this.errorService.handleError)
    );
  }

  joinInstitutionAsStudent(model: {
    collegeCode: string
  }) {
    return this.http.post(Endpoints.joinInstitutionAsStudent, { body: model }).pipe(
      catchError(this.errorService.handleError)
    );
  }


  getAllStudents(){
    return this.http.get(Endpoints.getAllStudents).pipe(
      catchError(this.errorService.handleError)
    );
  }


  getAllInstructors() {
    return this.http.get(Endpoints.getAllInstructors).pipe(
      catchError(this.errorService.handleError)
    );
  }

  getAllInstructorsRequests() {
    return this.http.get(Endpoints.getAllInstructorsRequest).pipe(
      catchError(this.errorService.handleError)
    );
  }


  acceptInstructorRequest(model: {instructorId: string, status: boolean}){
    return this.http.post(Endpoints.instructorRequest, model).pipe(
      catchError(this.errorService.handleError)
    );
  }
}
