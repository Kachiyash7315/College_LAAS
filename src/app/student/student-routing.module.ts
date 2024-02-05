import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignmentsComponent } from './screens/assignments/assignments.component';
import { ClassroomComponent } from './screens/classroom/classroom.component';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { SolveAssigninmentComponent } from './screens/solve-assigninment/solve-assigninment.component';
import { SubmissionComponent } from './screens/submission/submission.component';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'classroom',
        component: ClassroomComponent
      },
      {
        path: 'assignments',
        component: AssignmentsComponent
      },
      {
        path: 'solve',
        component: SolveAssigninmentComponent
      },
      {
        path: 'submission',
        component: SubmissionComponent
      },
      
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
