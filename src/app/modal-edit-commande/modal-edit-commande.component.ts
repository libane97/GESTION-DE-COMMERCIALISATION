import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductData} from '../model/ProductData';
import {UserData} from '../model/UserData';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../service/product.service';
import {CommandService} from '../service/command.service';

@Component({
  selector: 'app-modal-edit-commande',
  templateUrl: './modal-edit-commande.component.html',
  styleUrls: ['./modal-edit-commande.component.css']
})
export class ModalEditCommandeComponent implements OnInit {
  @Input() public data;
  product: ProductData[];
  user: UserData[];
  @Output() public passEntry = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,public productService:ProductService,public commandService:CommandService) { }

  ngOnInit(): void {
    this.productService.getProduit().
    subscribe(
      res => {
        this.product = res;
        console.log(res);
      },
      err => console.log(err)
    );
    this.commandService.getUser().
    subscribe(
      data => {
        this.user = data;
        console.log(data);
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
