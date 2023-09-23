import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from "../services/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  
  constructor(private authService: AuthService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // Get the JWT token from your AuthService
    const token = localStorage.getItem("id_token");

    // Clone the request and add the Authorization header with the token
    if (token) {
      console.log('Intercepted Request:', request);
      console.log('JWT Token:', token);
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
        
      });
      //console.log("Trigered API is ----->");
    }

    // Continue with the modified request
    return next.handle(request);
  }
}
