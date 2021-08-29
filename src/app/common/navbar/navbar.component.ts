import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  showHide = true;

  constructor(private router:Router,private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.triggeredLogin.subscribe(response => {
      if(response ==='Logged In'){
        this.showHide=false;
      }else
      {
        this.showHide=true;
      }
    });
    const token =localStorage.getItem('token');
    if(token){
      this.showHide= false;
    }
  }
  redirectToLogin(): void{
    this.router.navigate(['/auth']);

  }
  logout():void{
    this.router.navigate(['/homepage']);
    localStorage.clear();
    this.authService.loggedIn('Logged Out');
  }

}
