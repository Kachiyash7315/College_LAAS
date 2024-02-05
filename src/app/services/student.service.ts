import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { catchError } from 'rxjs';
import { HandleErrorService } from '../helpers/handle-error.service';
import { Endpoints } from '../utils/endpoints';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient, public jwtHelper: JwtHelperService, public errorService: HandleErrorService) { }

  joinClassroomRequest(model :{classroomId: string}){
    return this.http.post(Endpoints.joinClassrooms, model).pipe(
      catchError(this.errorService.handleError)
    );
  }

  getAllEnrolledClassrooms(){
    return this.http.get(Endpoints.getAllclassroomsEnrolled).pipe(
      catchError(this.errorService.handleError)
    );
  }

  getAllLabsWithinClassroom(id: string){
    return this.http.get(Endpoints.getAllStudentLabs+`/?classroomId=${id}`).pipe(
      catchError(this.errorService.handleError)
    );
  }



  getSubmissionDetails(id: string){
    return this.http.get(Endpoints.getSubmissionDetails+`/?id=${id}`).pipe(
      catchError(this.errorService.handleError)
    );
  }



  getLabAssignments(labId: string){
    return this.http.get(Endpoints.getassignmentStudent + `?labId=${labId}`).pipe(
      catchError(this.errorService.handleError)
    )
  }

  getAssignmentDetails(assignmentId: string){
    return this.http.get(Endpoints.getAssignmentDetails + `?assignmentId=${assignmentId}`).pipe(
      catchError(this.errorService.handleError)
    )
  }

}
