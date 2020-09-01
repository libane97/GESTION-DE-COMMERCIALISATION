import { Component, OnInit } from '@angular/core';
import {PanierService} from '../service/panier.service';
import {PanierData} from '../model/PanierData';
import {ItemProduct} from '../model/ItemProduct';
import {Router} from '@angular/router';
import {LoginService} from '../service/login.service';
import {CategorieService} from '../service/categorie.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  data:any;
  public caddy:PanierData;
  constructor(public  panierService:PanierService,public router:Router,public loginService:LoginService,public categorieService:CategorieService) { }

  ngOnInit(): void {
    this.caddy=this.panierService.getCaddy();
    console.log(this.caddy);
    this.categorieService.getCategorie()
      .subscribe(rest => {
          console.log(rest);
          this.data=rest
        },
        err => console.log(err)
      )
  }
  onRemoveProductFromCaddy(p: ItemProduct) {
    this.panierService.removeProduct(p.id);
  }
  getTotal() {
    return this.panierService.getTotalCurrentCaddy();
  }

  onNewOrder() {
    this.router.navigateByUrl("/client");
  }

}
