import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FactureService {
  public apiService = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
   getFactureByCommand(numero){
     return this.http.get<any>(this.apiService + '/command/FactureByCommand?numero='+numero);
   }
}
