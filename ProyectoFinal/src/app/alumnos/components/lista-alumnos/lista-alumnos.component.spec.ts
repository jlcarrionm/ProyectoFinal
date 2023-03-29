import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAlumnosComponent } from './lista-alumnos.component';
import { AlumnosService } from '../../services/alumnos.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('ListaAlumnosComponent', () => {
  let component: ListaAlumnosComponent;
  let fixture: ComponentFixture<ListaAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaAlumnosComponent ],
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        FormsModule,
        RouterTestingModule

      ],
      providers:[AlumnosService]

    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
