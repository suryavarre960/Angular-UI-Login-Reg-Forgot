import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export default class ForgotPasswordComponent implements OnInit{
  
  forgotpasswordForm!:FormGroup;
   fb = inject(FormBuilder);
   authService = inject(AuthService)
   ngOnInit(): void {
    this.initiateForm();
  }

  initiateForm(){
  this.forgotpasswordForm = this.fb.group({
       email: ['', Validators.compose([Validators.required, Validators.email])]
    })
  }

  submit(){
    this.authService.sendEmailService(this.forgotpasswordForm.value.email).subscribe({
      next: (res)=>{
        alert(res.message);
        this.forgotpasswordForm.reset();
      },
      error:(err)=>{
        alert(err.error.message);
      }  
    })
  }

}
