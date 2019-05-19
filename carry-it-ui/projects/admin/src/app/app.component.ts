import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Component( {
    selector: 'ci-admin-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
} )
export class AppComponent {
    constructor( private readonly authService: AuthService ) {
    }

    get isHeaderVisible$(): Observable<boolean> {
        return this.authService.isAuthenticated$;
    }
}
