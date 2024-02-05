import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './screens/dashboard/dashboard.component';
import { SharedModule } from "../shared/shared.module";
import { StudentRoutingModule } from './student-routing.module';
import { RouterModule } from '@angular/router';
import { ClassroomComponent } from './screens/classroom/classroom.component';
import { AssignmentsComponent } from './screens/assignments/assignments.component';
import { SolveAssigninmentComponent } from './screens/solve-assigninment/solve-assigninment.component';
import { SubmissionComponent } from './screens/submission/submission.component';



@NgModule({
    declarations: [
        DashboardComponent,
        ClassroomComponent,
        AssignmentsComponent,
        SolveAssigninmentComponent,
        SubmissionComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        StudentRoutingModule,
        RouterModule,
    ]
})
export class StudentModule { }
