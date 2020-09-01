import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  public apiService = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
   getArticle(){
    return this.http.get<any>(this.apiService + '/Product/list');
   }
  SearchByLibelle(libelle){
    return this.http.get<any>(this.apiService +'/Product/search?libelle='+ libelle);
  }
}
