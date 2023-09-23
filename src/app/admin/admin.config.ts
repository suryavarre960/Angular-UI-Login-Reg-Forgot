import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { Adminroutes } from './admin.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
//import { AuthInterceptorService } from './helpers/auth-interceptor.service';
import { provideAnimations } from '@angular/platform-browser/animations';
export const adminConfig: ApplicationConfig = {

  providers: [provideRouter(Adminroutes), provideHttpClient(), provideAnimations()]
};
