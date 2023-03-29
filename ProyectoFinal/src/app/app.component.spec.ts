import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListaCursosComponent } from './cursos/components/lista-cursos/lista-cursos.component';
import { LoginComponent } from './autenticacion/components/login/login.component';
import { AutenticacionInicioComponent } from './autenticacion/components/autenticacion-inicio/autenticacion-inicio.component';
import { EditarAlumnosDialogComponent } from './alumnos/components/editar-alumnos-dialog/editar-alumnos-dialog.component';
import { ListaAlumnosComponent } from './alumnos/components/lista-alumnos/lista-alumnos.component';
import { CursoService } from './cursos/services/cursos.service';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule

      ],
      declarations: [
        AppComponent,
        /* ListaCursosComponent, */



      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ProyectoFinal'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ProyectoFinal');
  });

/*   it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ProyectoFinal app is running!');
  }); */
});
