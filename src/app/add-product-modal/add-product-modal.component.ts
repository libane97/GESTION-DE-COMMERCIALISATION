import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductData} from '../model/ProductData';
import {CategorieData} from '../model/CategorieData';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RessourceService} from '../service/ressource.service';

@Component({
  selector: 'app-add-product-modal',
  templateUrl: './add-product-modal.component.html',
  styleUrls: ['./add-product-modal.component.css']
})
export class AddProductModalComponent implements OnInit {
  @Input() public product;
  categories: CategorieData[];
  @Output() public passEntry = new EventEmitter();
  constructor(private activeModal: NgbActiveModal,private ressourceservice: RessourceService) { }

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
  save()
  {
    this.passEntry.emit(this.product);
    this.activeModal.close();
  }

}
