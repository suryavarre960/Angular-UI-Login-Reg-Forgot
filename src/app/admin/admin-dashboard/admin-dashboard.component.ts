import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { AdminSidebarComponent } from '../admin-sidebar/admin-sidebar.component';
import AdminHomeComponent from '../admin-home/admin-home.component';
//import { AdminHomeComponent } from '../admin-home/admin-home.component'

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [CommonModule, RouterOutlet,RouterModule, AdminSidebarComponent, AdminHomeComponent],
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export default class AdminDashboardComponent {

}
