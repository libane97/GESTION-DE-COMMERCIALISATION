import { Component, OnInit } from '@angular/core';
import {ProductData} from '../model/ProductData';
import {ProductService} from '../service/product.service';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {ModalEditProductComponent} from '../modal-edit-product/modal-edit-product.component';
import {NgbAlert, NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ModalConfirmDialogComponent} from '../modal-confirm-dialog/modal-confirm-dialog.component';
import {AddProductModalComponent} from '../add-product-modal/add-product-modal.component';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  data: ProductData[];
  product: ProductData;
  motCle:any;
  private currentTime: number;
  currentPage = 1;
  itemsPerPage = 3;
  pageSize: number;
  message="Veuilllez saisir le prix de la procduit chercher";
  constructor(public productService: ProductService, public loginService:LoginService,public route:Router,
              private modalserivce: NgbModal
              ) { }

  ngOnInit() {
    this.getProduct();
    this.product = {
      id: '',
      libelle:'',
      description:'',
      photo:'',
      quantite:'',
      prix:'',
      categorie: {id : '', libelle: ''}
    }
    this.loginService.getUsername();
  }

  private getProduct() {
    this.productService.getProduit()
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

  open(data){
    const modalref = this.modalserivce.open(ModalEditProductComponent);
    modalref.componentInstance.data = data;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.productService.saveOrUpdateMedecin(receivedData).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
    })
  }

  delete(d){
    const modalref = this.modalserivce.open(ModalConfirmDialogComponent);
    modalref.componentInstance.title = "SUPPRESSION D'UN PRODUIT";
    modalref.componentInstance.content = "ETES-VOUS SUR DE VOULOIR SUPPRIMER LE PRODUIT "+
      "["+d.libelle+", "+d.libelle+", "+d.description+"]";
    modalref.componentInstance.passEntry.subscribe(()=>{
      console.log("delete");
      this.productService.delete(d.id).subscribe(res => {
          const index = this.data.indexOf(d);
          this.data.splice(index,1);
          console.log(res);
        },
        err => console.log(err)
      );
    })
  }
  laodForm() {
    const modalref = this.modalserivce.open(AddProductModalComponent);
    modalref.componentInstance.product = this.product;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.productService.saveOrUpdateMedecin(receivedData).
      subscribe(
        res => {
          this.data.push(res);
          console.log(res);
        },
        err => console.log(err)
      );

    })
  }
  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }
  search()
  {
    if (this.motCle !=""){
      this.productService.Search(this.motCle)
        .subscribe(rest => {
            console.log(rest);
            // @ts-ignore
            this.data=rest

          },
          err => console.log(err)
        )
    }else if(this.motCle == ""){
         this.message;
         this.getProduct();
    }
  }
  getTs() {
    return this.currentTime;
  }

}
