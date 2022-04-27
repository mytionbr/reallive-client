import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    return of(this.authService.isAuthenticated()).pipe(
      map((isAuth: boolean) => {
        const currentUrl = state.url;
        const isAuthPages = currentUrl === '/signin' || currentUrl === '/signup';
       
        if(isAuth && isAuthPages){
          return this.router.parseUrl('/app');
        }
        if (isAuth) {
          return true;
        } 
        if(!isAuth && isAuthPages){
          return true
        }
        return this.router.parseUrl('/signin');
      })
    );
  }
}
