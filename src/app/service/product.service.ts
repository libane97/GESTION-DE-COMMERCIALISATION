import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from '@angular/common/http';
import {ProductData} from '../model/ProductData';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  public apiService = 'http://localhost:8081';
  constructor(private http: HttpClient) { }
  getProduit():Observable<any>{
    return this.http.get<any>(this.apiService + '/Product/list');
  }
  saveOrUpdateMedecin(product){
    return this.http.post<ProductData>(this.apiService + '/Product/adds', product);
  }
  delete(product_Id) {
    return this.http.get<any>(this.apiService + '/Product/deletes?id='+ product_Id);
  }

  Search(prix){
    return this.http.get<any>(this.apiService +"/Product/SearchPrix?prix="+ prix)
  }

  uploadPhotoProduct(file: File, id): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();
    formdata.append('file', file);
    const req = new HttpRequest('POST', this.apiService+'/uploadPhoto/'+id, formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }
  SearchByLibelle(motCle){
    return this.http.get<any>(this.apiService +"/Product/Search?libelle="+ motCle)
  }
  getProductById(id){
     return this.http.get<any>(this.apiService + "/Product/getProduitById/"+id);
  }
}
