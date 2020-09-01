import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDetailCommandComponent } from './edit-detail-command.component';

describe('EditDetailCommandComponent', () => {
  let component: EditDetailCommandComponent;
  let fixture: ComponentFixture<EditDetailCommandComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditDetailCommandComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDetailCommandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
