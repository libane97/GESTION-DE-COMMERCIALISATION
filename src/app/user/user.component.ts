import { Component, OnInit } from '@angular/core';
import {ProductData} from '../model/ProductData';
import {ProductService} from '../service/product.service';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {UserService} from '../service/user.service';
import {UserData} from '../model/UserData';
import {ModalEditProductComponent} from '../modal-edit-product/modal-edit-product.component';
import {ModalConfirmDialogComponent} from '../modal-confirm-dialog/modal-confirm-dialog.component';
import {AddProductModalComponent} from '../add-product-modal/add-product-modal.component';
import {AddUserComponent} from '../add-user/add-user.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  data: UserData[];
  users: UserData;
  motCle:any;
  currentPage = 1;
  itemsPerPage = 3;
  pageSize: number;
  message="Veuilllez saisir le prix de la procduit chercher";
  constructor(public userService: UserService, public loginService:LoginService,public route:Router,
              private modalserivce: NgbModal
  ) { }


  ngOnInit(): void {
    this.getUtilisateur();
    this.users = {
        id:'',
        username:'',
        name:'',
        photo:'',
        password:'',
        email:'',
        telephone:'',
        role: {id:'',name:''}
    }
  }

  private getUtilisateur() {
    this.userService.getUser()
      .subscribe(rest => {
          console.log(rest);
          this.data = rest;
        },

        err => console.log(err)
      )
  }

  open(data){
    const modalref = this.modalserivce.open(ModalEditProductComponent);
    modalref.componentInstance.data = data;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.userService.saveOrUpdateUser(receivedData).
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
      "["+d.username+", "+d.email+", "+d.telephone+"]";
    modalref.componentInstance.passEntry.subscribe(()=>{
      console.log("delete");
      this.userService.deleteUser(d.id).subscribe(res => {
          const index = this.data.indexOf(d);
          this.data.splice(index,1);
          console.log(res);
        },
        err => console.log(err)
      );
    })
  }
  laodForm() {
    const modalref = this.modalserivce.open(AddUserComponent);
    modalref.componentInstance.users = this.users;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.userService.saveOrUpdateUser(receivedData).
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

  search() {

  }
}
