import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { confirmPasswordValodator } from 'src/app/validators/confirm-password.validator';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export default class ResetPasswordComponent implements OnInit{

  resetpasswordForm!:FormGroup;
  fb = inject(FormBuilder);
  authService = inject(AuthService)
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);
  token!:String;

  ngOnInit(): void {
   this.initiateForm();
   this.activatedRoute.params.subscribe(val=>{
    this.token = val['token']
    console.log(this.token);
   })
  }

  initiateForm(){
    this.resetpasswordForm = this.fb.group({
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    },
    {
      validator: confirmPasswordValodator('password', 'confirmPassword')
    }
    )
  }
  submit(){
    const resetPayload = {
      token: this.token,
      password: this.resetpasswordForm.value.password
    }
   this.authService.resetPasswordService(resetPayload).subscribe({
    next:(res)=>{
      alert(res.message);
      this.resetpasswordForm.reset();
      this.router.navigate(['/login']);
    },
    error: (err)=>{
      alert(err.error.message);
    }
   })
  }
}
