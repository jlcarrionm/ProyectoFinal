import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { Sesion } from 'src/app/models/sesion';
import { Usuario } from 'src/app/models/usuario';
import { LoginService } from '../../services/login.service';
import { cargarSesion } from '../../state/state/auth.actions';
import { AuthState } from '../../state/state/auth.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  formulario!: FormGroup;
  suscripcion!: Subscription;

  constructor(
   private loginService: LoginService,
    private router: Router,
    private authStore: Store<AuthState>
  ){}

  ngOnInit(): void {
    this.formulario = new FormGroup({
    //  usuario: new FormControl(),
      usuario: new FormControl('', [Validators.required]),
      contrasena: new FormControl(),
      esAdmin: new FormControl(false)
    });


  }

  ngOnDestroy(): void {
    this.suscripcion.unsubscribe();
  }

  login(){
    let usuario: Usuario = {
      usuario: this.formulario.value.usuario,
      contrasena: this.formulario.value.contrasena,
      esAdmin: this.formulario.value.esAdmin
    }
   // this.loginService.login(usuario);
   this.suscripcion = this.loginService.login(usuario).subscribe((sesion: Sesion) => {
    this.authStore.dispatch(cargarSesion({ sesion: sesion }));
    this.router.navigate(['inicio']);
  });


   // this.router.navigate(['inicio']);
  }
}
