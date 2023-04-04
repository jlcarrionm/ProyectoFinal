import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlumnosRountingModule } from './alumnos-rounting.module';
import { ListaAlumnosComponent } from './components/lista-alumnos/lista-alumnos.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConcatenarNombreApellidoPipe } from './pipes/concatenar-nombre-apellido.pipe';
import { TamanoTitulosDirective } from './directives/tamano-titulos.directive';
import { EditarAlumnosDialogComponent } from './components/editar-alumnos-dialog/editar-alumnos-dialog.component';
import { AlumnosService } from './services/alumnos.service';
import { AgregarAlumnoComponent } from './components/agregar-alumno/agregar-alumno.component';


@NgModule({
  declarations: [
    ListaAlumnosComponent,
    ConcatenarNombreApellidoPipe,
    TamanoTitulosDirective,
    EditarAlumnosDialogComponent,
    AgregarAlumnoComponent,
  ],
  imports: [
    CommonModule,
    AlumnosRountingModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
