import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { LoginComponent } from './login.component';

describe('Pruebas unitarias de login-component', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
      ,
      imports: [
        ReactiveFormsModule,
        MaterialModule,
        BrowserAnimationsModule

      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente Login se crea correctamente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario se mantiene cuando dejamos los campos requeridos vacios', ()=>{
    const formulario = component.formulario;
    const contrasena = formulario.controls["contrasena"];

    contrasena.setValue('12345');

    expect(formulario.valid).toBeFalse();
  });


  it('El formulario cambia a VALID cuando ingresamos el campo usuario', ()=>{
    const formulario = component.formulario;
    const usuario = formulario.controls["usuario"];

    usuario.setValue('jcarrion');

    expect(usuario.valid).toBeTrue();
  });


});
