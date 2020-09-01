import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeCategorieComponent } from './edite-categorie.component';

describe('EditeCategorieComponent', () => {
  let component: EditeCategorieComponent;
  let fixture: ComponentFixture<EditeCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
