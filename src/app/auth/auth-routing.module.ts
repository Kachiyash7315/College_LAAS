import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InstituteGuardService } from '../guards/institute.guard';
import { InstitutionLoginComponent } from './screens/institution-login/institution-login.component';
import { LoginComponent } from './screens/login/login.component';
import { ProfileComponent } from './screens/profile/profile.component';
import { SignupComponent } from './screens/signup/signup.component';
import { VerifyEmailComponent } from './screens/verify-email/verify-email.component';
import { VerifyingComponent } from './screens/verifying/verifying.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'verify-email',
    component: VerifyEmailComponent
  },
  {
    path: 'verifying',
    component: VerifyingComponent
  },
  {
    path: 'institution-login',
    component: InstitutionLoginComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
