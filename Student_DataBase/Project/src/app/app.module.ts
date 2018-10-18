import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import { AppRoutingModule,routingComponents } from './app-routing.module';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
//import { CommonServiceService } from './common-service.service';
import {HttpClient, HttpClientModule } from '@angular/common/http';
//import { AlertComponent } from './alerts/alert/alert.component';
//import { HeaderComponent } from './layout/header/header.component';
//import { FooterComponent } from './layout/footer/footer.component';
import { ListComponent } from './components/admin/list/list.component';
import { CommonServiceService } from './service/common-service.service';
import { AlertComponent } from './components/alerts/alert/alert.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { AddUserComponent } from './components/admin/add-user/add-user.component';
import { AppRoutingModule, routingComponents } from './routing/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    AlertComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    AddUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule   
   ],
  providers: [CommonServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
