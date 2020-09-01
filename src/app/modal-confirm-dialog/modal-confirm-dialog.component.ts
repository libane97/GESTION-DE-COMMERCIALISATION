import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-confirm-dialog',
  templateUrl: './modal-confirm-dialog.component.html',
  styleUrls: ['./modal-confirm-dialog.component.css']
})
export class ModalConfirmDialogComponent implements OnInit {
  @Input() public title;
  @Input() public content;
  @Output() public passEntry = new EventEmitter<any>();
  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }
  remove()
  {
    this.passEntry.emit();
    this.activeModal.close();
  }
}
