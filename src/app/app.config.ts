import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient } from '@angular/common/http';
import { AuthInterceptorService } from './helpers/auth-interceptor.service';
import { provideAnimations } from '@angular/platform-browser/animations';
export const appConfig: ApplicationConfig = {

  providers: [provideRouter(routes), provideHttpClient(), {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptorService,
        multi: true,
    }, provideAnimations()]
};
