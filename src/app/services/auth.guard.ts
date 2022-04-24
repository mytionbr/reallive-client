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
      map((response: boolean) => {
        if(response && (state.url === '/signin' || state.url === '/signup')){
          return this.router.parseUrl('/app');
        }
        if (response) {
          return true;
        } 
        return this.router.parseUrl('/signin');
      })
    );
  }
}
