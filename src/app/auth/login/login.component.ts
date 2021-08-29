import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.createloginFormInstance();
   
  }
  redirectToHomepage():void{
    this.router.navigate(['/homepage']);
    

    

  }
  redirectToRegister():void{
    this.router.navigate(['/auth/register']);
  }
  redirectToForgotPassword():void{
    this.router.navigate(['/auth/forget-password']);
  }
  
  login():void{
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe( (response)=>{
    if(response && response.data && response.data.token){
      localStorage.setItem('token',response.data.token);
      localStorage.setItem('userId',response.data.userId);
      this.router.navigate(['/homepage']);
      this.authService.loggedIn('Logged In');
    }
    },(error)=>{
      console.log(error);
      if(error.status === 409 && error.error.errorDescription.includes("Email is not registered")){
        this.loginForm.controls.email.setErrors({notRegistered:true});

      }else if(error.status === 409 && error.errorDescription.includes("Incorrect password")){
        this.loginForm.controls.password.setErrors({inCorrect:true});
      }
  
    });
  }
  createloginFormInstance():void{
    this.loginForm=this.formBuilder.group({
       email:['',Validators.compose  ([Validators.required,Validators.pattern(' /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/')])],
       password:['',Validators.compose ([Validators.required,Validators.minLength(6)])]

    })
  }


}
