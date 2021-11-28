import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjServicioComponentComponent } from './ej-servicio-component.component';

describe('EjServicioComponentComponent', () => {
  let component: EjServicioComponentComponent;
  let fixture: ComponentFixture<EjServicioComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjServicioComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjServicioComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
