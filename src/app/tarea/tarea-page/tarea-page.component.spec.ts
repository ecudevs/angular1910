import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TareaPageComponent } from './tarea-page.component';

describe('TareaPageComponent', () => {
  let component: TareaPageComponent;
  let fixture: ComponentFixture<TareaPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TareaPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TareaPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
