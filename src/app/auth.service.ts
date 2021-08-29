import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  triggeredLogin = new BehaviorSubject<any>('');

  constructor(private httpClient:HttpClient) { }
  login(data:any):Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}v1/users/login`,data);
  }
  register(data:any):Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}v1/users/register`,data);
  }
 forgotPassword(data:any):Observable<any>{
    return this.httpClient.post<any>(`${environment.apiUrl}v1/users/forgotPassword`,data);
  }
  loggedIn(data:any):void{
    this.triggeredLogin.next(data);

  }
  
  }
