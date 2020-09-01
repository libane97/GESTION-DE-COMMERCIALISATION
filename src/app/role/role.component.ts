import { Component, OnInit } from '@angular/core';
import {CategorieData} from '../model/CategorieData';
import {RoleData} from '../model/RoleData';
import {CategorieService} from '../service/categorie.service';
import {Router} from '@angular/router';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {RoleService} from '../service/role.service';
import {AddCategorieComponent} from '../add-categorie/add-categorie.component';
import {AddRoleComponent} from '../add-role/add-role.component';
import {EditeCategorieComponent} from '../edite-categorie/edite-categorie.component';
import {EditeRoleComponent} from '../edite-role/edite-role.component';
import {ModalConfirmDialogComponent} from '../modal-confirm-dialog/modal-confirm-dialog.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  data: RoleData[];
  role: RoleData;
  motCle:string;
  currentPage = 1;
  itemsPerPage = 2;
  pageSize: number;
  message;
  constructor(public roleService:RoleService,private route:Router, private modalserivce: NgbModal) { }

  ngOnInit(): void {
    this.getRole();
    this.role = {
        id:'',
        name:''
    }
  }

  private getRole() {
     this.roleService.getRole()
       .subscribe(rest => {
           console.log(rest);
           this.data=rest
         },
         err => console.log(err)
       )
  }

  laodForm() {
    const modalref = this.modalserivce.open(AddRoleComponent);
    modalref.componentInstance.role = this.role;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.roleService.saveOrUpdateRole(receivedData).
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
    const modalref = this.modalserivce.open(EditeRoleComponent);
    modalref.componentInstance.data = data;
    modalref.componentInstance.passEntry.subscribe((receivedData)=>{
      console.log(receivedData);
      this.roleService.saveOrUpdateRole(receivedData).
      subscribe(
        res => {
          console.log(res);
        },
        err => console.log(err)
      );
    })
  }

  search() {

  }


  delete(d){
    const modalref = this.modalserivce.open(ModalConfirmDialogComponent);
    modalref.componentInstance.title = "SUPPRESSION UNE ROLE";
    modalref.componentInstance.content = "ETES-VOUS SUR DE VOULOIR SUPPRIMER LE ROLE "+
      "["+d.name+"]";
    modalref.componentInstance.passEntry.subscribe(()=>{
      console.log("delete");
      this.roleService.deleteRole(d.id).subscribe(res => {
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

}
