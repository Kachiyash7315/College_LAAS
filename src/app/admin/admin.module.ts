import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './screens/main/main.component';
import { LabsComponent } from './screens/labs/labs.component';
import { StudentsComponent } from './screens/students/students.component';
import { InstructorsComponent } from './screens/instructors/instructors.component';
import { EditLabModalComponent } from './components/edit-lab-modal/edit-lab-modal.component';
// import { SimpleModalModule } from 'ngx-simple-modal';
import { EditLabComponent } from './screens/edit-lab/edit-lab.component';
import { RemoveInstructorComponent } from './screens/remove-instructor/remove-instructor.component';
import { RemoveStudentComponent } from './screens/remove-student/remove-student.component';
import { ClassroomsComponent } from './screens/classrooms/classrooms.component';
import { EditClassroomComponent } from './screens/edit-classroom/edit-classroom.component';
import { RequestsComponent } from './screens/requests/requests.component';



@NgModule({
  declarations: [
    DashboardComponent,
    MainComponent,
    LabsComponent,
    StudentsComponent,
    InstructorsComponent,
    EditLabModalComponent,
    EditLabComponent,
    RemoveInstructorComponent,
    RemoveStudentComponent,
    ClassroomsComponent,
    EditClassroomComponent,
    RequestsComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    // SimpleModalModule
  ]
})


export class AdminModule { }


