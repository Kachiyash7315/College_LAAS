import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { InstructorRoutingModule } from './instructor-routing.module';
import { HomeComponent } from './screens/home/home.component';
import { LabStudioComponent } from './screens/lab-studio/lab-studio.component';
// import { CKEditor4, CKEditorModule } from 'ckeditor4-angular';
import { EditAssignmentComponent } from './screens/edit-assignment/edit-assignment.component';
import { StudentsComponent } from './screens/students/students.component';
import { RemoveStudentComponent } from './screens/remove-student/remove-student.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'; 
import { TagInputModule } from 'ngx-chips';
import { SubmissionsComponent } from './screens/submissions/submissions.component';
import { CheckSubmissionComponent } from './screens/check-submission/check-submission.component';






@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent,
    LabStudioComponent,
    EditAssignmentComponent,
    StudentsComponent,
    RemoveStudentComponent,
    SubmissionsComponent,
    CheckSubmissionComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InstructorRoutingModule,
    RouterModule,
    SharedModule,
    CKEditorModule,
    TagInputModule 
  ]
})
export class InstructorModule { }
