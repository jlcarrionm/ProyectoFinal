import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AuthState } from './autenticacion/state/state/auth.reducer';
import { selectSesionActiva, selectUsuarioActivo } from './autenticacion/state/state/auth.selectors';
import { SesionService } from './core/services/sesion.service';
import { Sesion } from './models/sesion';
import { Usuario } from './models/usuario';
import { cargarSesion } from './autenticacion/state/state/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ProyectoFinal';
  mobileQuery: MediaQueryList;
  sesionActiva$!: Observable<Boolean>;
  usuarioActivo$!: Observable<Usuario | undefined>;


  /*  fillerNav = Array.from({length: 50}, (_, i) => `Nav Item ${i + 1}`);
  */
  /*  fillerContent = Array.from(
     {length: 50},
     () =>
       `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
   ); */

   private _mobileQueryListener: () => void;

   constructor(changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router,
    private authStore: Store<AuthState>,

    private sesion: SesionService ) {

     this.mobileQuery = media.matchMedia('(max-width: 600px)');
     this._mobileQueryListener = () => changeDetectorRef.detectChanges();
     this.mobileQuery.addListener(this._mobileQueryListener);
   }

   ngOnInit(): void {
    //console.log('paso')
    //this.authStore.dispatch(cargarSesion({sesion: { sesionActiva: false }}));
    this.sesionActiva$ = this.authStore.select(selectSesionActiva);
    this.usuarioActivo$ = this.authStore.select(selectUsuarioActivo);
  }


   redigirAlumnos(){
   // console.log('redigirAlumnos')
    this.router.navigate(['inicio', {mesaje: 'Bienvenidos'}])
   }

   ngOnDestroy(): void {
     this.mobileQuery.removeListener(this._mobileQueryListener);
   }

   logout(){
    let sesionLogout: Sesion = {
      sesionActiva: false,
      usuarioActivo: undefined
    }
   // this.sesion.logout(sesionLogout);
    this.router.navigate(['auth/login']);
  }

   /* shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host); */
 }

