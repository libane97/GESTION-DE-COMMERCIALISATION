import {Component, OnInit} from '@angular/core';
import {LoginService} from '../service/login.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DetailCommandeService} from '../service/detail-commande.service';
import {DetailsCommandData} from '../model/DetailsCommandData';
import {ModalConfirmDialogComponent} from '../modal-confirm-dialog/modal-confirm-dialog.component';
import {AddDetailCommandComponent} from '../add-detail-command/add-detail-command.component';
import {EditDetailCommandComponent} from '../edit-detail-command/edit-detail-command.component';

@Component({
  selector: 'app-detail-commande',
  templateUrl: './detail-commande.component.html',
  styleUrls: ['./detail-commande.component.css']
})
export class DetailCommandeComponent implements OnInit {

  data: DetailsCommandData[];
  detailcommand: DetailsCommandData;
  dateCommande:any;
  currentPage = 1;
  itemsPerPage = 3;
  pageSize: number;
  message="Veuilllez saisir la date  de la commande rechercher";
  total: any;
  constructor(public detailCommandeService:DetailCommandeService, public loginService:LoginService,public route:Router,
              private modalserivce: NgbModal
  ) { }
  ngOnInit(): void {
    //this.getDetailCommand();
    this.detailCommandeService.getDetails()
      .subscribe(rest => {
          console.log(rest);
          this.data=rest
        },
        err => console.log(err)
      )
    this.detailcommand = {
         id:'',
         quantite:'',
         montant:'',
         produit:{id:'',libelle:'',prix:'',photo:'',quantite:'',description:'',categorie:{id:'',libelle:''}},
         commandes:{id:'',dateCommande:'',livraison:'',numero:'',produit:[],dateCommandef:''
           ,user:{id:'',username:'',name:'',photo:'',password:'',email:'',telephone:'',role:{id:'',name:''}}
         }
    }
  }

  private getDetailCommand() {
    this.detailCommandeService.getDetails()
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
    const modalref = this.modalserivce.open(EditDetailCommandComponent);
    modalref.componentInstance.data = data;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.detailCommandeService.saveOrUpdateDetailsCommand(receivedData).
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
    modalref.componentInstance.title = "SUPPRESSION D'UN DETAILS COMMANDE";
    modalref.componentInstance.content = "ETES-VOUS SUR DE VOULOIR SUPPRIMER LE DETAILS COMMANDE";
    modalref.componentInstance.passEntry.subscribe(()=>{
      console.log("delete");
      this.detailCommandeService.delete(d.id).subscribe(res => {
          const index = this.data.indexOf(d);
          this.data.splice(index,1);
          console.log(res);
        },
        err => console.log(err)
      );
    })
  }
  laodForm() {
    const modalref = this.modalserivce.open(AddDetailCommandComponent);
    modalref.componentInstance.detailcommand = this.detailcommand;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.detailCommandeService.saveOrUpdateDetailsCommand(receivedData).
      subscribe(
        res => {
          this.data.push(res);
          console.log(res);
        },
        err => console.log(err)
      );

    })
  }
  search()
  {
    if (this.dateCommande !=""){
      this.detailCommandeService.Search(this.dateCommande)
        .subscribe(rest => {
            console.log(rest);
            this.data=rest

          },
          err => console.log(err)
        )
    }else if(this.dateCommande == ""){
      this.message;
      this.getDetailCommand();
    }
  }
  getTotal(){
    const {produit} = this.detailcommand;
    // @ts-ignore
    this.total += this.detailcommand.quantite * produit.prix;
     console.log(this.total);
      return this.total;
  }
}
