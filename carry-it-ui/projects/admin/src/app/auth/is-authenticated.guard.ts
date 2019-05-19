import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable( {
    providedIn: 'root'
} )
export class IsAuthenticatedGuard implements CanActivate {

    constructor( private readonly authService: AuthService, private readonly router: Router ) {
    }

    canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean> {
        return this.authService.isAuthenticated$.pipe(
            tap( isAuthenticated => {
                if ( !isAuthenticated ) {
                    this.router.navigate( [ '/' ] );
                }
            } )
        );
    }
}
