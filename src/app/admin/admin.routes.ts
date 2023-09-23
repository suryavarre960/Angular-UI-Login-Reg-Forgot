import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { authGuard } from './helpers/auth.guard';

export const Adminroutes: Routes = [
    {path: "home", loadComponent: ()=> import('../admin/admin-home/admin-home.component')}
];

@NgModule({
    imports: [RouterModule.forChild(Adminroutes)]
  })
  export class AdminModule {}