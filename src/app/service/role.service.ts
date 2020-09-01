import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductData} from '../model/ProductData';
import {RoleData} from '../model/RoleData';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  public apiService = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getRole(){
    return this.http.get<any>(this.apiService + '/Role/listRole');
  }
  saveOrUpdateRole(Role){
    return this.http.post<RoleData>(this.apiService + '/Role/addRole', Role);
  }
  deleteRole(role_Id) {
    return this.http.get<any>(this.apiService + '/Role/deletes?id='+ role_Id);
  }
}
