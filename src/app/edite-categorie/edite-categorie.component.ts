import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {ProductService} from '../service/product.service';
import {CommandService} from '../service/command.service';

@Component({
  selector: 'app-edite-categorie',
  templateUrl: './edite-categorie.component.html',
  styleUrls: ['./edite-categorie.component.css']
})
export class EditeCategorieComponent implements OnInit {
  @Input() public data;
  @Output() public passEntry = new EventEmitter();
  constructor(public activeModal: NgbActiveModal,public productService:ProductService,public commandService:CommandService) { }

  ngOnInit(): void {
  }

  update()
  {
    this.passEntry.emit(this.data);
    this.activeModal.close();
  }
}
