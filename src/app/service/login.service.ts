import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiService = 'http://localhost:8081';
  public authenticated: boolean;
  public authenticatedUser;
  private username: string;
  private role: string;
  private id: string;
  constructor(private http: HttpClient) { }
  public LoginRequest(user: any) {
    return this.http.post<any>(this.apiService + '/login', user);
  }

  saveToken(json){
    localStorage.setItem('token', json.accessToken);
    localStorage.setItem('roles', json.authorities);
    localStorage.setItem('username', json.username);
    //localStorage.setItem('id', json.id);
  }

  getUsername(){
     this.username =  localStorage.getItem('username');
     return this.username;
  }
}
