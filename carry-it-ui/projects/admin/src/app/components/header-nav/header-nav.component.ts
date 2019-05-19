import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth/auth.service';

@Component( {
    selector: 'ci-admin-header-nav',
    templateUrl: './header-nav.component.html',
    styleUrls: [ './header-nav.component.scss' ]
} )
export class HeaderNavComponent {
    constructor( private readonly authService: AuthService, private readonly router: Router ) {
    }

    private logout(): void {
        this.authService.logout$().pipe(
            switchMap( () => of( this.router.navigate( [ '/' ] ) ) )
        ).subscribe();
    }
}
