import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/app/material.module';

import { ListaCursosComponent } from './lista-cursos.component';
import { CursoService } from '../../services/cursos.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Pruebas unitarias de lista-cursos-component', () => {
  let component: ListaCursosComponent;
  let fixture: ComponentFixture<ListaCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaCursosComponent ],
      imports: [
     /*    ReactiveFormsModule,*/

        BrowserAnimationsModule,
        MaterialModule,
        HttpClientTestingModule,
        FormsModule

      ],
      providers:[CursoService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('El componente se crea correctamente', () => {
    expect(component).toBeTruthy();
  });
});
