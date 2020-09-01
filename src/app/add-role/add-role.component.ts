import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategorieService} from '../service/categorie.service';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.css']
})
export class AddRoleComponent implements OnInit {
  @Input() public role;
  @Output() public passEntry = new EventEmitter();
  constructor(public roleService:RoleService,private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  save()
  {
    this.passEntry.emit(this.role);
    this.activeModal.close();
  }

}
