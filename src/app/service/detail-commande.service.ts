import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductData} from '../model/ProductData';
import {DetailsCommandData} from '../model/DetailsCommandData';

@Injectable({
  providedIn: 'root'
})
export class DetailCommandeService {

  public apiService = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getDetails(){
    return this.http.get<any>(this.apiService + '/Dcommand/listDcommand');
  }
  saveOrUpdateDetailsCommand(detailsCommand){
    return this.http.post<DetailsCommandData>(this.apiService + '/Dcommand/add', detailsCommand);
  }
  delete(detailsCommand_Id) {
    return this.http.get<any>(this.apiService + '/Dcommand/delete?id='+ detailsCommand_Id);
  }

  Search(dateCommande)
  {
    return this.http.get<any>(this.apiService +"/Dcommand/Search?dateCommande="+ dateCommande)
  }
}
