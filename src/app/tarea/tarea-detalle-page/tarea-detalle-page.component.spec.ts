import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaDetallePageComponent } from './tarea-detalle-page.component';

describe('TareaDetallePageComponent', () => {
  let component: TareaDetallePageComponent;
  let fixture: ComponentFixture<TareaDetallePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaDetallePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaDetallePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
