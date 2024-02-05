import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { BecomeAuthorComponent } from './screens/become-author/become-author.component';
import { ReactiveFormsModule } from '@angular/forms';
import { IndexComponent } from './screens/index/index.component';
import { OnboardingStudentComponent } from './screens/onboarding-student/onboarding-student.component';
import { OnboardingInstructorComponent } from './screens/onboarding-instructor/onboarding-instructor.component';
import { OnboardingInstitutionComponent } from './screens/onboarding-institution/onboarding-institution.component';
import { VerifyingInstituteComponent } from './screens/verifying-institute/verifying-institute.component';
import { InstitutionListComponent } from './screens/institution-list/institution-list.component';
import { JoinClassroomComponent } from './screens/join-classroom/join-classroom.component';
import { InfoSection1Component } from './screens/info-section1/info-section1.component';
import { CreateWorkspaceComponent } from './screens/create-workspace/create-workspace.component';



@NgModule({
  declarations: [
    HomePageComponent,
    BecomeAuthorComponent,
    IndexComponent,
    OnboardingStudentComponent,
    OnboardingInstructorComponent,
    OnboardingInstitutionComponent,
    VerifyingInstituteComponent,
    InstitutionListComponent,
    JoinClassroomComponent,
    InfoSection1Component,
    CreateWorkspaceComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
