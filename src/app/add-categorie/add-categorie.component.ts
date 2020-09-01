import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategorieData} from '../model/CategorieData';
import {CategorieService} from '../service/categorie.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-categorie',
  templateUrl: './add-categorie.component.html',
  styleUrls: ['./add-categorie.component.css']
})
export class AddCategorieComponent implements OnInit {
  @Input() public categorie;
  @Output() public passEntry = new EventEmitter();
  constructor(public categorieService:CategorieService,private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  save()
  {
    this.passEntry.emit(this.categorie);
    this.activeModal.close();
  }
}
