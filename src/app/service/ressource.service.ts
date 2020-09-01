import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RessourceService {

  private apiService = "http://localhost:8081";
  constructor(private http: HttpClient) { }
  getCategorie() {
    return this.http.get<any>(this.apiService + '/Categorie/liste');
  }
}
