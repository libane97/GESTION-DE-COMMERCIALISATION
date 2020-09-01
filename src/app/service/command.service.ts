import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductData} from '../model/ProductData';
import {CommandData} from '../model/CommandData';

@Injectable({
  providedIn: 'root'
})
export class CommandService {
  public apiService = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getCommand(){
    return this.http.get<any>(this.apiService + '/command/listcommand');
  }
  saveOrUpdateMedecin(command){
    return this.http.post<CommandData>(this.apiService + '/command/add', command);
  }
  delete(command_Id) {
    return this.http.get<any>(this.apiService + '/Product/deletes?id='+ command_Id);
  }

  getUser(){
    return this.http.get<any>(this.apiService + '/command/listUser');
  }
  Search(datecommand,datecommandf){
    return this.http.get<any>(this.apiService +"/command/SearchDateCommande?datecommand="+ datecommand+"&datecommandf="+datecommandf)
  }

  getCommandById(id){
    return this.http.get<any>(this.apiService + "/command/getCommandById/"+id);
  }

}
