import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassroomsComponent } from './screens/classrooms/classrooms.component';
import { EditClassroomComponent } from './screens/edit-classroom/edit-classroom.component';
import { EditLabComponent } from './screens/edit-lab/edit-lab.component';
import { InstructorsComponent } from './screens/instructors/instructors.component';
import { LabsComponent } from './screens/labs/labs.component';
import { MainComponent } from './screens/main/main.component';
import { RemoveInstructorComponent } from './screens/remove-instructor/remove-instructor.component';
import { RemoveStudentComponent } from './screens/remove-student/remove-student.component';
import { RequestsComponent } from './screens/requests/requests.component';
import { StudentsComponent } from './screens/students/students.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        children :[
          {
            path: '',
            component: DashboardComponent
          },
          {
            path: 'instructors',
            component: InstructorsComponent
          },
          {
            path: 'instructors/remove',
            component: RemoveInstructorComponent
          },
          {
            path: 'students',
            component: StudentsComponent
          },
          {
            path: 'students/remove',
            component: RemoveStudentComponent
          },
          {
            path: 'labs',
            component: LabsComponent,
          },
          {
            path: 'labs/edit',
            component: EditLabComponent
          },
          {
            path: 'classroom',
            component: ClassroomsComponent
          },
          {
            path: 'classroom/edit',
            component: EditClassroomComponent
          },
          {
            path: 'requests',
            component: RequestsComponent
          }
        ]
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
