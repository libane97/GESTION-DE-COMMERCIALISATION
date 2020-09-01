import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandByOneComponent } from './command-by-one.component';

describe('CommandByOneComponent', () => {
  let component: CommandByOneComponent;
  let fixture: ComponentFixture<CommandByOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandByOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandByOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
