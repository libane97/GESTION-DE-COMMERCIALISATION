import { Component, OnInit } from '@angular/core';
import {CategorieService} from '../service/categorie.service';
import {CategorieData} from '../model/CategorieData';
import {Router} from '@angular/router';
import {ProductData} from '../model/ProductData';
import {AddProductModalComponent} from '../add-product-modal/add-product-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddCategorieComponent} from '../add-categorie/add-categorie.component';
import {ModalEditProductComponent} from '../modal-edit-product/modal-edit-product.component';
import {EditeCategorieComponent} from '../edite-categorie/edite-categorie.component';
import {ModalConfirmDialogComponent} from '../modal-confirm-dialog/modal-confirm-dialog.component';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {
  data: CategorieData[];
  categorie: CategorieData;
  motCle:string;
  currentPage = 1;
  itemsPerPage = 2;
  pageSize: number;
  message;
  constructor(public categorieService:CategorieService,private route:Router, private modalserivce: NgbModal) { }

  ngOnInit(): void {
    this.getCategorie();
    this.categorie = {
        id:'',
        libelle:''
    }
  }

  search()
  {
    this.categorieService.Search(this.motCle)
      .subscribe(rest => {
          console.log(rest);
          this.data=rest

        },
        err => console.log(err)
      )
  }

  private getCategorie() {
    this.categorieService.getCategorie()
      .subscribe(rest => {
         console.log(rest);
          this.data=rest
        },
        err => console.log(err)
      )
  }
  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }

  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  open(data){
    const modalref = this.modalserivce.open(EditeCategorieComponent);
    modalref.componentInstance.data = data;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.categorieService.saveOrUpdateMedecin(receivedData).
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
    modalref.componentInstance.title = "SUPPRESSION UNE CATEGORIE";
    modalref.componentInstance.content = "ETES-VOUS SUR DE VOULOIR SUPPRIMER LE Categorie "+
      "["+d.libelle+"]";
    modalref.componentInstance.passEntry.subscribe(()=>{
      console.log("delete");
      this.categorieService.delete(d.id).subscribe(res => {
          const index = this.data.indexOf(d);
          this.data.splice(index,1);
          console.log(res);
        },
        err => console.log(err)
      );
    })
  }

  laodForm() {
    const modalref = this.modalserivce.open(AddCategorieComponent);
    modalref.componentInstance.categorie = this.categorie;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.categorieService.saveOrUpdateMedecin(receivedData).
      subscribe(
        res => {
          this.data.push(res);
          console.log(res);
        },
        err => console.log(err)
      );

    })
  }
}
