import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SignInComponent } from '../components/login/sign-in/sign-in.component';
import { RegisterComponent } from '../components/login/register/register.component';
import { ListComponent } from '../components/admin/list/list.component';
import { AddUserComponent } from '../components/admin/add-user/add-user.component';
//import { SignInComponent } from './login/sign-in/sign-in.component';
//import { RegisterComponent } from './login/register/register.component'
//import { ListComponent } from './components/admin/list/list.component';
//import { SignInComponent } from './components/login/sign-in/sign-in.component';
//import { RegisterComponent } from './components/login/register/register.component';
//import { AddUserComponent } from './components/admin/add-user/add-user.component';



const routes:Routes=[
  {
    path:'',
    component: SignInComponent
  },
  {
    path:'signIn',
    component: SignInComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'admin/listing',
    component:ListComponent
  },
  {
    path:'admin/addUser',
    component:AddUserComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
export const routingComponents=[SignInComponent,RegisterComponent,ListComponent];