import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditeRoleComponent } from './edite-role.component';

describe('EditeRoleComponent', () => {
  let component: EditeRoleComponent;
  let fixture: ComponentFixture<EditeRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditeRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditeRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
