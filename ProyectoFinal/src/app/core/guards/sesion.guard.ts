import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';
import { AuthState } from 'src/app/autenticacion/state/state/auth.reducer';
import { selectSesionState } from 'src/app/autenticacion/state/state/auth.selectors';
import { Sesion } from 'src/app/models/sesion';
import { SesionService } from '../services/sesion.service';

@Injectable({
  providedIn: 'root'
})
export class SesionGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(
  //  private sesion: SesionService,
  private authStore: Store<AuthState>,
    private router: Router
  ){}

  canActivate(
   /*  route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      ); */

      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.authStore.select(selectSesionState).pipe(
        map((sesion: Sesion) =>  {

         // console.log('sddd' ,sesion);


          if( sesion.sesionActiva){

            return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }


        })
      );
  }
  canActivateChild(
    /* childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      ); */
      childRoute: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
        return this.authStore.select(selectSesionState).pipe(
          map((sesion: Sesion) => {

            if( sesion.sesionActiva){
             // this.router.navigate(['auth/login']);
              return true;
            }else{
              this.router.navigate(['auth/login']);
              return false;
            }
          })
        );
  }
  canLoad(
   /*  route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.sesion.obtenerSesion().pipe(
        map((sesion: Sesion) => {
          if(sesion.sesionActiva){
            return true;
          }else{
            this.router.navigate(['auth/login']);
            return false;
          }
        })
      );
  } */
  route: Route,
  segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authStore.select(selectSesionState).pipe(
      map((sesion: Sesion) => {

       // console.log('x',sesion)

        if( sesion.sesionActiva){
        //  this.router.navigate(['auth/login']);
          return true;
        }else{
          this.router.navigate(['auth/login']);
          return false;
        }
      })
    );
}
}
