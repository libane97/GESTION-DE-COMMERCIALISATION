import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RoleData} from '../model/RoleData';
import {UserData} from '../model/UserData';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public apiService = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getUser(){
    return this.http.get<any>(this.apiService + '/listUser');
  }
  saveOrUpdateUser(user){
    return this.http.post<UserData>(this.apiService + '/adds', user);
  }
  deleteUser(user_Id) {
    return this.http.get<any>(this.apiService + '/deletes?id='+ user_Id);
  }
}
