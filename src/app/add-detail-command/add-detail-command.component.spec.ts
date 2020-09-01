import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDetailCommandComponent } from './add-detail-command.component';

describe('AddDetailCommandComponent', () => {
  let component: AddDetailCommandComponent;
  let fixture: ComponentFixture<AddDetailCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddDetailCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDetailCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
