import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { confirmPasswordValodator } from 'src/app/validators/confirm-password.validator';
import { AuthService } from 'src/app/services/auth.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export default class RegisterComponent implements OnInit {
   fb = inject(FormBuilder);
   authService = inject(AuthService);
   router = inject(Router)
  registerForm! : FormGroup;
  
  ngOnInit(){
   this.initiateForm();
  }
  initiateForm(){
    this.registerForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userName: ['', Validators.required],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    },
    {
      validator: confirmPasswordValodator('password', 'confirmPassword')
    })
  }

  register(){
    this.authService.register(this.registerForm.value).subscribe({
      next:(res)=>{
        alert(res.message);
        this.router.navigate(['login']);
      },
      error:(err)=>{
        console.log(err);
      }
    })
  }
}
