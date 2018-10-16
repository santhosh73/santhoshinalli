import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignInComponent } from './login/sign-in/sign-in.component';
import { RegisterComponent } from './login/register/register.component';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CommonServiceService } from './common-service.service';
import {HttpClient, HttpClientModule } from '@angular/common/http';
import { AlertComponent } from './alerts/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule   
   ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
