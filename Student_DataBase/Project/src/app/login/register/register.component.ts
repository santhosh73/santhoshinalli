import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { CommonServiceService } from '../../common-service.service';
import { AlertService } from 'src/app/service/alert.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm:FormGroup;
  data:any;

  constructor(private formBuilder: FormBuilder,
    private service: CommonServiceService,
    private alertService:AlertService,
    private router:Router) { }

  ngOnInit() {
    this.registerForm=this.formBuilder.group({
      firstName:['',Validators.required],
      userID:['',[Validators.required,Validators.minLength(3),Validators.maxLength(3)]],
      email:['',[Validators.required,Validators.email]],
      gender:['',Validators.required],
      city:['',Validators.required],
      state:['',Validators.required],
      zip:['',[Validators.required,Validators.minLength(6),Validators.maxLength(6)]],
      password:['',[Validators.required,Validators.minLength(6)]],
      password1:['',[Validators.required,Validators.minLength(6)]]
    });
  }

  get id(){
    return this.registerForm.controls;
  }

  submit(){
    console.log("/:::::::::::::::"+this.id.firstName.value)
    console.log("/:::::::::::::::"+this.registerForm.controls.firstName.value)
    this.service.register(this.registerForm.value).subscribe(data=>{
      console.log("after the getting the response:::::",data)
      this.alertService.success('Registration Successful');
      this.router.navigate(['/signIn']);

    },
    error=>{
      this.alertService.failure(error);
    });

  }

}
