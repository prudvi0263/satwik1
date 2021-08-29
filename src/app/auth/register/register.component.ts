import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;

  constructor(private router:Router,private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.createRegisterFormInstance();
  }
  redirectToHomepage():void{
    this.router.navigate(['/homepage']);
    

  }
  redirectToLogin():void{
    this.router.navigate(['/auth/login']);
  }
  createRegisterFormInstance():void{
    this.registerForm=this.formBuilder.group({
     firstName:[''],
     lastName:[''],
     mobile:[''],
     email:['',Validators.compose  ([Validators.required,Validators.pattern(' /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/')])],
     password:['',Validators.compose ([Validators.required,Validators.minLength(6)])]

    })
  }
  register():void{
    this.authService.register(this.registerForm.value).subscribe(response=>{
      this.router.navigate(['/homepage']);
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('userId',response.data.userId);
      this.authService.loggedIn('Logged In');

    },(error)=>{
     
      if(error.status === 409 && error.error.errorDescription.includes('Email already exist')){
        this.registerForm.controls.email.setErrors({alreadyRegistered:true});

      }
    });
  }

}
