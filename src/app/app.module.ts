import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ProductComponent } from './product/product.component';
import {FormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './service/token-interceptor.service';
import { ArticleComponent } from './article/article.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AccessDeniedComponent } from './access-denied/access-denied.component';
import { ModalConfirmDialogComponent } from './modal-confirm-dialog/modal-confirm-dialog.component';
import { AddProductModalComponent } from './add-product-modal/add-product-modal.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalEditProductComponent } from './modal-edit-product/modal-edit-product.component';
import { CommandComponent } from './command/command.component';
import { AddCommandComponent } from './add-command/add-command.component';
import { ModalEditCommandeComponent } from './modal-edit-commande/modal-edit-commande.component';
import { UserComponent } from './user/user.component';
import { CategorieComponent } from './categorie/categorie.component';
import { AddCategorieComponent } from './add-categorie/add-categorie.component';
import { EditeCategorieComponent } from './edite-categorie/edite-categorie.component';
import { RoleComponent } from './role/role.component';
import { AddRoleComponent } from './add-role/add-role.component';
import { EditeRoleComponent } from './edite-role/edite-role.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditeUserComponent } from './edite-user/edite-user.component';
import { DetailCommandeComponent } from './detail-commande/detail-commande.component';
import { AddDetailCommandComponent } from './add-detail-command/add-detail-command.component';
import { EditDetailCommandComponent } from './edit-detail-command/edit-detail-command.component';
import { PanierComponent } from './panier/panier.component';
import { DetailProductComponent } from './detail-product/detail-product.component';
import { CommandByOneComponent } from './command-by-one/command-by-one.component';
import { FactureComponent } from './facture/facture.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProductComponent,
    ArticleComponent,
    PageNotFoundComponent,
    AccessDeniedComponent,
    ModalConfirmDialogComponent,
    AddProductModalComponent,
    ModalEditProductComponent,
    CommandComponent,
    AddCommandComponent,
    ModalEditCommandeComponent,
    UserComponent,
    CategorieComponent,
    AddCategorieComponent,
    EditeCategorieComponent,
    RoleComponent,
    AddRoleComponent,
    EditeRoleComponent,
    AddUserComponent,
    EditeUserComponent,
    DetailCommandeComponent,
    AddDetailCommandComponent,
    EditDetailCommandComponent,
    PanierComponent,
    DetailProductComponent,
    CommandByOneComponent,
    FactureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent],
  entryComponents: [ModalEditProductComponent]
})
export class AppModule { }
