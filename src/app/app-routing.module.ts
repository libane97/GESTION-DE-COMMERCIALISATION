import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {ProductComponent} from './product/product.component';
import {ArticleComponent} from './article/article.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AccessDeniedComponent} from './access-denied/access-denied.component';
import {CommandComponent} from './command/command.component';
import {AddCommandComponent} from './add-command/add-command.component';
import {CategorieComponent} from './categorie/categorie.component';
import {AddCategorieComponent} from './add-categorie/add-categorie.component';
import {RoleComponent} from './role/role.component';
import {UserComponent} from './user/user.component';
import {DetailCommandeComponent} from './detail-commande/detail-commande.component';
import {PanierComponent} from './panier/panier.component';
import {DetailProductComponent} from './detail-product/detail-product.component';
import {CommandByOneComponent} from './command-by-one/command-by-one.component';
import {FactureComponent} from './facture/facture.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'Product', component: ProductComponent},
  { path: 'Categorie', component: CategorieComponent},
  { path: 'role', component: RoleComponent},
  { path: 'Detailcommand', component: DetailCommandeComponent},
  { path: 'Article', component: ArticleComponent},
  { path: 'user', component: UserComponent},
  { path: 'addCategorie', component: AddCategorieComponent},
  { path: 'factureByCommand', component: FactureComponent},
  {path:'detail-product/:url',component:DetailProductComponent},
  {path:'detail-command/:url',component:CommandByOneComponent},
  { path: 'panier', component: PanierComponent},
  {path: 'AddCommand',  component: AddCommandComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'Command', component: CommandComponent},
  {path: '**',  component: PageNotFoundComponent},
  {path: 'accessdenied', component: AccessDeniedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
