import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule,RouterModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export default class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router)
 loginForm! : FormGroup;
 
 ngOnInit(){
  this.initiateForm();
 }
 initiateForm(){
   this.loginForm = this.fb.group({
     email: ['', Validators.compose([Validators.required, Validators.email])],
     password: ['', Validators.required]
   })
 }

 login(){
   this.authService.login(this.loginForm.value).subscribe({
     next:(res: any)=>{
      console.log("login com",res)
       alert(res.message);
       if(res.data.isAdmin === true){
        this.router.navigate(['./admin/dashboard']);
       } else{
        this.router.navigate(['./dashboard']);
       }
       
     },
     error:(err: { error: { message: any; }; })=>{
       alert(err.error.message);
     }
   })
 }
}
