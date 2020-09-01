import { Component, OnInit } from '@angular/core';
import {CommandService} from '../service/command.service';
import {ProductData} from '../model/ProductData';
import {CommandData} from '../model/CommandData';
import {AddProductModalComponent} from '../add-product-modal/add-product-modal.component';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {AddCommandComponent} from '../add-command/add-command.component';
import {Router} from '@angular/router';
import {UserData} from '../model/UserData';
import {ModalConfirmDialogComponent} from '../modal-confirm-dialog/modal-confirm-dialog.component';
import {LoginService} from '../service/login.service';
import {ModalEditProductComponent} from '../modal-edit-product/modal-edit-product.component';
import {ModalEditCommandeComponent} from '../modal-edit-commande/modal-edit-commande.component';

@Component({
  selector: 'app-command',
  templateUrl: './command.component.html',
  styleUrls: ['./command.component.css']
})
export class CommandComponent implements OnInit {
  data: CommandData[];
 // data: any;
  command: CommandData;
  user : UserData;
  currentPage = 1;
  itemsPerPage = 3;
  pageSize: number;
  datecommand: any;
  datecommandf: any;
  message="Veuilllez saisir le prix de la procduit chercher";
  constructor(public commandService:CommandService,
              private modalserivce: NgbModal,
              private route:Router,
              public loginService:LoginService
              ) { }

  ngOnInit(): void {
    this.getCommand();
    this.command = {
        id:'',
        livraison: '',
        dateCommande:'',
        dateCommandef:'',
        numero:'',
        produit: [],
        user: {id:'',name:'',email:'',username:'',password:'',photo:'',role:{id:'',name:''},telephone:''}

    }
      this.user = {
            id:'',
            name:'',
            username:'',
            email:'',
            password:'',
            photo:'',
            telephone:'',
            role:{id:'',name:''}
      }
  }

  private getCommand() {
     this.commandService.getCommand()
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

  laodForm(){
    const modalref = this.modalserivce.open(AddCommandComponent);
    modalref.componentInstance.command = this.command;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      const produit = [];
      receivedData.produit.forEach(e =>
      {
        produit.push({
          id: e,
          libelle: ""
        })
      })
      receivedData.produit = produit;
      console.log(receivedData);
      this.commandService.saveOrUpdateMedecin(receivedData).
      subscribe(
        res => {
          this.data.push(res);
          console.log(res);
        },
        err => console.log(err)
      );

    })
  }
  open(data){
    const modalref = this.modalserivce.open(ModalEditCommandeComponent);
    modalref.componentInstance.data = data;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      const produit = [];
      receivedData.produit.forEach(e =>
      {
        produit.push({
          id: e,
          libelle: ""
        })
      })
      receivedData.produit = produit;
      console.log(receivedData);
      this.commandService.saveOrUpdateMedecin(receivedData).
      subscribe(
        res => {
          this.data.push(res);
          console.log(res);
        },
        err => console.log(err)
      );

    })
  }
  delete(d){
    const modalref = this.modalserivce.open(ModalConfirmDialogComponent);
    modalref.componentInstance.title = "SUPPRESSION UN Commande";
    modalref.componentInstance.content = "ETES-VOUS SUR DE VOULOIR SUPPRIMER La COMMANDE de "+
      "["+d.dateCommande+","+d.user.username+"]";
    modalref.componentInstance.passEntry.subscribe(()=>{
     // console.log("delete");
      this.commandService.delete(d.id).subscribe(res => {
          const index = this.data.indexOf(d);
          this.data.splice(index,1);
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
    if (this.datecommand !="" && this.datecommandf != ""){
      this.commandService.Search(this.datecommand,this.datecommandf)
        .subscribe(rest => {
            console.log(rest);
            // @ts-ignore
            this.data=rest

          },
          err => console.log(err)
        )
    }else if(this.datecommand == "" && this.datecommandf == ""){
      this.message;
      this.getCommand();
    }
  }
  onCommandDetails(p: CommandData) {
    let url =  btoa(p.id);
    this.route.navigateByUrl('detail-command/'+url);
  }
}
