import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalEditCommandeComponent } from './modal-edit-commande.component';

describe('ModalEditCommandeComponent', () => {
  let component: ModalEditCommandeComponent;
  let fixture: ComponentFixture<ModalEditCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalEditCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalEditCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
