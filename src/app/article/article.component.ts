import { Component, OnInit } from '@angular/core';
import {ArticleService} from '../service/article.service';
import {ProductData} from '../model/ProductData';
import {PanierService} from '../service/panier.service';
import {LoginService} from '../service/login.service';
import {CategorieService} from '../service/categorie.service';
import {CategorieData} from '../model/CategorieData';
import {Router} from '@angular/router';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  data: ProductData[];
  categorie:CategorieData[];
  libelle:any;
  message="Veuilllez saisir le prix de la procduit chercher";
  constructor(public articleService:ArticleService,
              public  panierService:PanierService,
              public loginService:LoginService,
              public route:Router,
              public categorieService:CategorieService) { }

  ngOnInit(): void {
    this.getArticle();
    this.categorieService.getCategorie()
      .subscribe(rest => {
          console.log(rest);
          this.categorie=rest
        },
        err => console.log(err)
      )
  }

  private getArticle() {
    this.articleService.getArticle()
      .subscribe(rest => {
          //  this.loginService.saveToken(rest);
          // tslint:disable-next-line:no-console
          console.log(rest);
          this.data = rest;
          // this.loginService.saveToken(rest);
        },
        // tslint:disable-next-line:no-console
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
    }else if(this.libelle == "undefined"){
      this.message;
      this.getArticle();
    }
  }

  onAddProductToCaddy(p:ProductData) {
    this.panierService.AddProductToCaddy(p);
  }
  onProductDetails(p: ProductData) {
    let url =  btoa(p.id);
    this.route.navigateByUrl('detail-product/'+url);
  }
}
