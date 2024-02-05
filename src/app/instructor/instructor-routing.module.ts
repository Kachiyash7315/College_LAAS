import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckSubmissionComponent } from './screens/check-submission/check-submission.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { EditAssignmentComponent } from './screens/edit-assignment/edit-assignment.component';
import { HomeComponent } from './screens/home/home.component';
import { LabStudioComponent } from './screens/lab-studio/lab-studio.component';
import { RemoveStudentComponent } from './screens/remove-student/remove-student.component';
import { StudentsComponent } from './screens/students/students.component';
import { SubmissionsComponent } from './screens/submissions/submissions.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'lab-studio',
        component: LabStudioComponent,
      },
      {
        path: 'lab-studio/assignment/edit',
        component: EditAssignmentComponent
      },
      {
        path: 'lab-studio/students',
        component: StudentsComponent,
      },
      { path: 'lab-studio/students/remove', component: RemoveStudentComponent, },
      { path: 'lab-studio/assignment/submissions', component: SubmissionsComponent, },
      { path: 'lab-studio/assignment/submissions/check', component: CheckSubmissionComponent, },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstructorRoutingModule { }
