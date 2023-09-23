import { Injectable, inject } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { apiUrls } from '../api.urls';
import * as moment from "moment";
import { tap, shareReplay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
// export class ILoginUser  {
//    email!:String;
//    password!:String;
// }
export class AuthService {

 http = inject(HttpClient);

//  Register API
register(registerObj:any){
 return this.http.post<any>(`${apiUrls.authServiceApi}/register`, registerObj);
}

login(loginObj: any) {
  return this.http.post<any>(`${apiUrls.authServiceApi}/login`, loginObj).pipe(
    tap((res: any) => this.setSession(res)),
    shareReplay()
  );
}

private setSession(authResult: any) {
  const expiresAt = moment().add(authResult.expiresIn,'second');

  localStorage.setItem('id_token', authResult.token);
  localStorage.setItem("expires_at", JSON.stringify(expiresAt.valueOf()) );
  localStorage.setItem("isAdmin",authResult.data.isAdmin );
}  

logout() {
  localStorage.removeItem('id_token');
  localStorage.removeItem('expires_at');
}

public isLoggedIn() {
  return moment().isBefore(this.getExpiration());
}

isLoggedOut() {
  return !this.isLoggedIn();
}

getExpiration() {
  const expiration = localStorage.getItem('expires_at');
  const expiresAt = JSON.parse(expiration ?? 'null');
  return moment(expiresAt);
}

 //Forgot password email
 sendEmailService(email:String){
  return this.http.post<any>(`${apiUrls.authServiceApi}/send-email`, {email: email});
 }

  //reset password email
  resetPasswordService(resetObj:any){
    return this.http.post<any>(`${apiUrls.authServiceApi}/reset`, resetObj);
   }

}
