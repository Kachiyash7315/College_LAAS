import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService as AuthGuard } from './guards/auth.guard';
import { InstituteGuardService } from './guards/institute.guard';
import { InstructorGuard } from './guards/instructor.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: 'dashboard/admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canActivate: [InstituteGuardService]
  },
  {
    path: 'dashboard/instructor',
    loadChildren: () => import('./instructor/instructor.module').then(m => m.InstructorModule),
    canActivate: [InstructorGuard]
  },

  {
    path: 'dashboard/student',
    loadChildren: () => import('./student/student.module').then(m => m.StudentModule),
    canActivate: []
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
