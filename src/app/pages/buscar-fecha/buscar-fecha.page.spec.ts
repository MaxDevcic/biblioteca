import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BuscarFechaPage } from './buscar-fecha.page';

describe('BuscarFechaPage', () => {
  let component: BuscarFechaPage;
  let fixture: ComponentFixture<BuscarFechaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarFechaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
