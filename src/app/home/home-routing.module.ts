import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BecomeAuthorComponent } from './screens/become-author/become-author.component';
import { HomePageComponent } from './screens/home-page/home-page.component';
import { AuthGuardService as AuthGuard } from '../guards/auth.guard';
import { OnboardingStudentComponent } from './screens/onboarding-student/onboarding-student.component';
import { OnboardingInstructorComponent } from './screens/onboarding-instructor/onboarding-instructor.component';
import { OnboardingInstitutionComponent } from './screens/onboarding-institution/onboarding-institution.component';
import { VerifyingInstituteComponent } from './screens/verifying-institute/verifying-institute.component';
import { CreateWorkspaceComponent } from './screens/create-workspace/create-workspace.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'create',
    component: CreateWorkspaceComponent,
  },
  {
    path: 'onboarding/student',
    component: OnboardingStudentComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'onboarding/instructor',
    component: OnboardingInstructorComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'onboarding/institution',
    component: OnboardingInstitutionComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'verifying-institute',
    component: VerifyingInstituteComponent,
    canActivate: [AuthGuard],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
