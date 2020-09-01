import {Component, Input, OnInit} from '@angular/core';
import {ProductData} from '../model/ProductData';
import {UserData} from '../model/UserData';
import {CommandData} from '../model/CommandData';
import {ProductService} from '../service/product.service';
import {CommandService} from '../service/command.service';

@Component({
  selector: 'app-edit-detail-command',
  templateUrl: './edit-detail-command.component.html',
  styleUrls: ['./edit-detail-command.component.css']
})
export class EditDetailCommandComponent implements OnInit {
  @Input() public data;
  product: ProductData[];
  user: UserData[];
  command: CommandData[];
  constructor(public  productService:ProductService,public commandService:CommandService) { }

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
        res => {
          this.command = res;
          console.log(res);
        },
        err => console.log(err)
      );
  }

}
