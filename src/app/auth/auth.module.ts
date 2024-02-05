import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './screens/login/login.component';
import { SignupComponent } from './screens/signup/signup.component';
import { ForgotPasswordComponent } from './screens/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './screens/verify-email/verify-email.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './screens/profile/profile.component';
import { SharedModule } from '../shared/shared.module';
import { VerifyingComponent } from './screens/verifying/verifying.component';
import { InstitutionLoginComponent } from './screens/institution-login/institution-login.component';


@NgModule({
  declarations: [
    LoginComponent,
    SignupComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    ProfileComponent,
    VerifyingComponent,
    InstitutionLoginComponent,
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    SharedModule
  ]
})
export class AuthModule { }
