import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";
import { HotToastService } from "@ngneat/hot-toast";
import { Observable, catchError, throwError } from "rxjs";
import { AuthService } from "../services/auth.service";

export class AuthInterceptorService implements HttpInterceptor {
   constructor(private toastr: HotToastService) { }
   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const token = localStorage.getItem("token");
      const admin_token = localStorage.getItem("admin_token");

      console.log("Interceptor Working", token);

      if (token) {
         // If we have a token, we set it to the header
         request = request.clone({
            url: request.url.replace('https://', 'http://'),
            setHeaders: { authentication: `bearer ${token}`, admin_token : `bearer ${admin_token}` }
         });
      }

      return next.handle(request).pipe(
         catchError((err) => {
            if (err instanceof HttpErrorResponse) {
               this.toastr.error(err.statusText);
            }  
            return throwError(err);
         })
      )
   }
}