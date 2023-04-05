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
import { EffectsModule } from '@ngrx/effects';
import { AlumnosStateEffects } from './state/alumnos-state.effects';
import { StoreModule } from '@ngrx/store';
import { alumnosStateFeatureKey, reducer } from './state/alumnos-state.reducer';



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
    StoreModule.forFeature(alumnosStateFeatureKey, reducer),
    EffectsModule.forFeature([AlumnosStateEffects]),


  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
