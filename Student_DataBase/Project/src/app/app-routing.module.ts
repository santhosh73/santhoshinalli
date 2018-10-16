import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes } from '@angular/router';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { RegisterComponent } from './login/register/register.component'



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
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
  
})
export class AppRoutingModule { }
export const routingComponents=[SignInComponent,RegisterComponent];