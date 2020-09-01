import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ProductData} from '../model/ProductData';
import {CategorieData} from '../model/CategorieData';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  public apiService = 'http://localhost:8081';
  public host = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getCategorie(){
    return this.http.get<any>(this.apiService + '/Categorie/liste');
  }
  saveOrUpdateMedecin(categorie){
    return this.http.post<CategorieData>(this.apiService + '/Categorie/add', categorie);
  }
  delete(categorie_Id) {
    return this.http.get<any>(this.apiService + '/Categorie/Delete/'+ categorie_Id);
  }

  Search(mc){
    return this.http.get<any>(this.apiService +"/Categorie/Search?mc="+mc)
  }
}
