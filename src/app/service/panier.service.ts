import { Injectable } from '@angular/core';
import {PanierData} from '../model/PanierData';
import {ItemProduct} from '../model/ItemProduct';
import {ProductData} from '../model/ProductData';
import {UserData} from '../model/UserData';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  public currentCaddyName:string="Caddy1";
  public listCaddies:Array<{num:number,name:string}>=[{num:1,name:'Caddy1'}];
  public caddies:Map<string,PanierData> = new Map();
  constructor() {

    let  caddies = localStorage.getItem("mycaddies");
      if (caddies){
          this.caddies = JSON.parse(caddies);
      }
   else {
        let panierData = new PanierData(this.currentCaddyName);
        this.caddies[this.currentCaddyName] = panierData;
      }

  }

  public removeProduct(id):void{
    let caddy=this.caddies[this.currentCaddyName];
    delete caddy.items[id];
    this.saveCaddy();
  }
  public AddProductToCaddy(product:ProductData):void{

    let userdata = new UserData();
    let caddy = this.caddies[this.currentCaddyName];
    let productItem:ItemProduct=caddy.items[product.id];
    if (productItem){
      productItem.quantity+=product.quantite;
    }else{
      productItem = new ItemProduct();
      productItem.id = product.id;
    //  productItem.name = product.libelle;
      productItem.price = product.prix;
      productItem.quantity = product.quantite;
     // productItem.photo = product.photo;
        productItem.dateCommande = Date.now();
        productItem.product = product;
      caddy.items[product.id] = productItem;
      this.saveCaddy();
    }

  }
  public saveCaddy(){
       localStorage.setItem("mycaddies",JSON.stringify(this.caddies));
    }

  public getCaddy():PanierData  {
    let caddy=this.caddies[this.currentCaddyName];
    return caddy;
  }

  getSize(){
    let caddy=this.caddies[this.currentCaddyName];
    return Object.keys(caddy.items).length;
  }

  emptyCaddy(){
    this.caddies=new Map();
    this.listCaddies=[];
  }

  public getCurrentcaddy():PanierData{
    return this.caddies[this.currentCaddyName];
  }
  getTotalCurrentCaddy() {
    let caddy=this.caddies[this.currentCaddyName];
    let total=0;
    for(let key in caddy.items ){
      total+=caddy.items[key].price*caddy.items[key].quantity;
    }
    return total;
  }
}
