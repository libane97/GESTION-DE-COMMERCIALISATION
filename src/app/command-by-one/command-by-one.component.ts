import { Component, OnInit } from '@angular/core';
import {ProductService} from '../service/product.service';
import {CategorieService} from '../service/categorie.service';
import {LoginService} from '../service/login.service';
import {ActivatedRoute} from '@angular/router';
import {PanierService} from '../service/panier.service';
import {ArticleService} from '../service/article.service';
import {CommandService} from '../service/command.service';
import {CommandData} from '../model/CommandData';

@Component({
  selector: 'app-command-by-one',
  templateUrl: './command-by-one.component.html',
  styleUrls: ['./command-by-one.component.css']
})
export class CommandByOneComponent implements OnInit {
   data:any;
  constructor(
    public productService:ProductService,
    public categorieService:CategorieService,
    public loginService:LoginService,
    public route:ActivatedRoute,
    public panierService:PanierService,
    public articleService:ArticleService,
    public commandService:CommandService
  ) { }

  ngOnInit(): void {
    let url = atob(this.route.snapshot.params.url);
    this.commandService.getCommandById(url)
      .subscribe(
        rest => {
          this.data = rest;
          console.log(rest);
        },error => {
          console.log(error);
        }
      )
  }

}
