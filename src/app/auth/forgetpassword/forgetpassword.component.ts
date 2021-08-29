import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup,FormBuilder,Validators } from '@angular/forms';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.css']
})
export class ForgetpasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;

  constructor(private router:Router, private formBuilder:FormBuilder,private authService:AuthService) { }

  ngOnInit(): void {
    this.createforgotPasswordFormInstance();
   
  }
  redirectToHomepage():void{
    this.router.navigate(['/homepage']);
    

    

  }
  redirectToLogin():void{
    this.router.navigate(['/auth/login']);
  }
  
  forgotPassword():void{
    console.log(this.forgotPasswordForm.value);
    this.authService.forgotPassword(this.forgotPasswordForm.value).subscribe( (response)=>{
    if(response && response.data && response.data){
      
      this.router.navigate(['/homepage']);
    
    }
    },(error)=>{
      console.log(error);
      if(error.status === 409 && error.error.errorDescription.includes('Email is not registered')){
        this.forgotPasswordForm.controls.email.setErrors({notRegistered:true});

      }else if(error.status === 409 && error.errorDescription.includes('Incorrect password')){
        this.forgotPasswordForm.controls.password.setErrors({inCorrect:true});
      }
  
    });
  }
  createforgotPasswordFormInstance():void{
    this.forgotPasswordForm=this.formBuilder.group({
       email:['',Validators.compose  ([Validators.required,Validators.pattern(' /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/')])],
       password:['',Validators.compose ([Validators.required,Validators.minLength(6)])]

    })
  }


}
