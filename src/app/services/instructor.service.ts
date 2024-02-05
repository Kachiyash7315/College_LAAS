import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { HotToastService } from '@ngneat/hot-toast';
import { catchError } from 'rxjs';
import { HandleErrorService } from '../helpers/handle-error.service';
import { Assignment } from '../models/assignment';
import { Endpoints } from '../utils/endpoints';

@Injectable({
  providedIn: 'root'
})
export class InstructorService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, private router: Router, private toastr: HotToastService, public errorService: HandleErrorService) { }


  getAllAppointedLabs() {
    return this.http.get(Endpoints.getinstructorlabs).pipe(
      catchError(this.errorService.handleError)
    );
  }

  createAssignment(model: Assignment) {
    console.log("Model is", model);
    return this.http.post(Endpoints.assignments, model).pipe(
      catchError(this.errorService.handleError)
    )
  }

  deleteAssignment(id: string){
    return this.http.delete(Endpoints.assignments + `?id=${id}`).pipe(
      catchError(this.errorService.handleError)
    )
  }

  getLabAssignments(labId: string){
    return this.http.get(Endpoints.assignments + `?labId=${labId}`).pipe(
      catchError(this.errorService.handleError)
    )
  }


  getAllSubmissions(assignmentId: string){
    return this.http.get(Endpoints.submissions + `?assignmentId=${assignmentId}`).pipe(
      catchError(this.errorService.handleError)
    )
  }

  getSubmissionById(submissionId: string){
    return this.http.get(Endpoints.submissions + `?submissionId=${submissionId}`).pipe(
      catchError(this.errorService.handleError)
    )
  }

  addReviewForAssignment(model : {remark: string, submissionId: string}){
    return this.http.post(Endpoints.remark, model).pipe(
      catchError(this.errorService.handleError)
    )
  }

}
