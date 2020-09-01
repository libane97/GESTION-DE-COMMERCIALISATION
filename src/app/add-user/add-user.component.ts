import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CategorieData} from '../model/CategorieData';
import {RoleData} from '../model/RoleData';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {RoleService} from '../service/role.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  @Input() public users;
  role: RoleData[];
  @Output() public passEntry = new EventEmitter();
  constructor(private activeModal: NgbActiveModal,public roleService:RoleService) { }

  ngOnInit(): void {
    this.roleService.getRole().
      subscribe(
        res => {
          this.role = res;
          console.log(res);
        },
        err => console.log(err)
      );
  }

  save()
  {
    this.passEntry.emit(this.users);
    this.activeModal.close();
  }
}
