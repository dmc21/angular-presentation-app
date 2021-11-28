import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LateralAngularCliComponent } from './lateral-angular-cli.component';

describe('LateralAngularCliComponent', () => {
  let component: LateralAngularCliComponent;
  let fixture: ComponentFixture<LateralAngularCliComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LateralAngularCliComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LateralAngularCliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
