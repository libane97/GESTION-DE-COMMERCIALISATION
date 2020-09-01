import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {ProductData} from '../model/ProductData';
import {CategorieService} from '../service/categorie.service';
import {LoginService} from '../service/login.service';
import {ActivatedRoute, Router} from '@angular/router';
import {PanierService} from '../service/panier.service';
import {ArticleService} from '../service/article.service';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  data:any;
  public libelle: string;
  public message: any;
  public categorie: any;
  constructor(public productService:ProductService,
              public categorieService:CategorieService,
              public loginService:LoginService,
              public route:ActivatedRoute,
              public panierService:PanierService,
              public articleService:ArticleService
              ) { }

  ngOnInit(): void {
    let url = atob(this.route.snapshot.params.url);
    this.productService.getProductById(url)
      .subscribe(
        rest => {
          this.data = rest;
          console.log(rest);
        },error => {
          console.log(error);
        }
      )
    this.categorieService.getCategorie()
      .subscribe(rest => {
          console.log(rest);
          this.categorie=rest
        },
        err => console.log(err)
      )
  }
  search()
  {
    if (this.libelle !=""){
      this.articleService.SearchByLibelle(this.libelle)
        .subscribe(rest => {
            console.log(rest);
            // @ts-ignore
            this.data=rest

          },
          err => console.log(err)
        )
    }else{
      this.message;
    }
  }
  onAddProductToCaddy(p:ProductData) {
    this.panierService.AddProductToCaddy(p);
  }
}
