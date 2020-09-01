import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductData} from '../model/ProductData';
import {UserData} from '../model/UserData';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../service/product.service';
import {CommandService} from '../service/command.service';
import {DetailCommandeService} from '../service/detail-commande.service';
import {CommandData} from '../model/CommandData';

@Component({
  selector: 'app-add-detail-command',
  templateUrl: './add-detail-command.component.html',
  styleUrls: ['./add-detail-command.component.css']
})
export class AddDetailCommandComponent implements OnInit {

  @Input() public detailcommand;
  product: ProductData[];
  command: CommandData[];
  @Output() public passEntry = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,
              public productService:ProductService,
              public commandService:CommandService,
              public detailCommandeService:DetailCommandeService
              ) { }

  ngOnInit(): void {
    this.productService.getProduit().
    subscribe(
      res => {
        this.product = res;
        console.log(res);
      },
      err => console.log(err)
    );
    this.commandService.getCommand().
    subscribe(
      data => {
        console.log(data);
        this.command = data;
      },
      err => console.log(err)
    );
  }

  save()
  {
    this.passEntry.emit(this.detailcommand);
    this.activeModal.close();
  }


}
