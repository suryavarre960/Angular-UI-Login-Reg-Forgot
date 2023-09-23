import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './helpers/auth.guard';
import { NgModule } from '@angular/core';
import { AdminModule } from './admin/admin.routes';

export const routes: Routes = [
    {path: "login", loadComponent: ()=> import('./pages/login/login.component')},
    {path: "register", loadComponent: ()=> import('./pages/register/register.component')},
    {path: "forgotpassword", loadComponent: ()=> import('./pages/forgot-password/forgot-password.component')},
    {path: "dashboard", loadComponent: ()=> import('./pages/dashboard/dashboard.component'), canActivate: [authGuard]},
    {path: "reset/:token", loadComponent: ()=> import('./pages/reset-password/reset-password.component')},
    {path: "admin/dashboard", loadComponent: ()=> import('./admin/admin-dashboard/admin-dashboard.component')},

];
