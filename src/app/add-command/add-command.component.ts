import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategorieData} from '../model/CategorieData';
import {ProductData} from '../model/ProductData';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../service/product.service';
import {UserData} from '../model/UserData';
import {CommandService} from '../service/command.service';

@Component({
  selector: 'app-add-command',
  templateUrl: './add-command.component.html',
  styleUrls: ['./add-command.component.css']
})
export class AddCommandComponent implements OnInit {
  @Input() public command;
  product: ProductData[];
  user: UserData[];
  @Output() public passEntry = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,public productService:ProductService,public commandService:CommandService) { }

  ngOnInit(): void {
    //this.getUser();
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
  save()
  {
    this.passEntry.emit(this.command);
    this.activeModal.close();
  }

  private getUser() {
    this.commandService.getUser().
    subscribe(
      data => {
        this.user = data;
        console.log(data);
      },
      err => console.log(err)
    );
  }
}
