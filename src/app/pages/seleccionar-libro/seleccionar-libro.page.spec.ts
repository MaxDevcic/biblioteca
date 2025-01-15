import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SeleccionarLibroPage } from './seleccionar-libro.page';

describe('SeleccionarLibroPage', () => {
  let component: SeleccionarLibroPage;
  let fixture: ComponentFixture<SeleccionarLibroPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleccionarLibroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
