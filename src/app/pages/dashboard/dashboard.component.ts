import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from 'src/app/services/auth.service';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {MatNativeDateModule} from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';

import {NgFor} from '@angular/common';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, MatSlideToggleModule,MatInputModule,MatSelectModule,NgFor,
    MatFormFieldModule,MatIconModule,MatNativeDateModule,MatDatepickerModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export default class DashboardComponent {

  authService = inject(AuthService);
  selectedDate: Date | undefined;
  selectedFrom: string | undefined;
  selectedValue: string | undefined;
  foodsFrom:any[] = [
    {value: 'start-1', viewValue: 'Our Food Depo'}
  ]
  foodsTo: Food[] = [
    {value: 'stop-1', viewValue: 'Hi-Tech CIty - Tech Mahindra'},
    {value: 'stop-2', viewValue: 'Hi-Tech CIty - Dell'},
    {value: 'stop-3', viewValue: 'Hi-Tech CIty - Google'},
  ];

  log(){
    this.authService.logout();
  }
}
