import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { SharedModule } from './shared/shared.module';
import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { RouterModule } from '@angular/router';
import { AuthGuardService as AuthGuard } from './guards/auth.guard';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';
import { AuthInterceptorService } from './interceptor/http_interceptor';
import { HandleErrorService } from './helpers/handle-error.service';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular'; 





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    AuthRoutingModule,
    SharedModule,
    HttpClientModule,
    HotToastModule.forRoot(),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    LoadingBarRouterModule,
    RouterModule,
    CKEditorModule,
  ],
  exports: [
    SharedModule
  ],
  providers: [AuthGuard, JwtHelperService, { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    HandleErrorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true,
      deps: [HotToastService]
    },
    JwtHelperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
