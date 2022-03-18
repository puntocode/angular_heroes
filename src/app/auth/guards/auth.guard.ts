import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate  {
  constructor(
    private authService: AuthService,
    private router: Router
  ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      // if(this.authService.auth.id) return true;
      // console.log('Bloqueado por canActivate')
      // return false;
      return this.authService.verificaAutenticacion()
              .pipe(
                tap( estaAutenticado => { if( !estaAutenticado ) this.router.navigate(['./auth/login']); })
              )
  }

  //cuando carga el modulo si usamos Lazyload para cargar la ruta
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
      return this.authService.verificaAutenticacion()
              .pipe(
                tap( estaAutenticado => { if( !estaAutenticado ) this.router.navigate(['./auth/login']); })
              );
    }
}
