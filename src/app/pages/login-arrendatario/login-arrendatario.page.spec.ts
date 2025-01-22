import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginArrendatarioPage } from './login-arrendatario.page';

describe('LoginArrendatarioPage', () => {
  let component: LoginArrendatarioPage;
  let fixture: ComponentFixture<LoginArrendatarioPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginArrendatarioPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
