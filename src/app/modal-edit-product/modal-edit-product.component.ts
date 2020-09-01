import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductData} from '../model/ProductData';
import {RessourceService} from '../service/ressource.service';
import {CategorieData} from '../model/CategorieData';

@Component({
  selector: 'app-modal-edit-product',
  templateUrl: './modal-edit-product.component.html',
  styleUrls: ['./modal-edit-product.component.css']
})
export class ModalEditProductComponent implements OnInit {
  @Input() public data;
  categories: CategorieData[];
  @Output() public passEntry = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,private ressourceservice: RessourceService) { }

  ngOnInit(): void {
    this.ressourceservice.getCategorie().
    subscribe(
      res => {
        this.categories = res;
        console.log(res);
      },
      err => console.log(err)
    );
  }
  update()
  {
    this.passEntry.emit(this.data);
    this.activeModal.close();
  }
}
