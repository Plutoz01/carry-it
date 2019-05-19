import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

@Injectable( {
    providedIn: 'root'
} )
export class AuthService {
    private readonly userSource = new BehaviorSubject( null );

    login$( username: string, password: string ): Observable<boolean> {
        this.userSource.next( true );
        return of( true ).pipe(
            delay( 500 )
        );
    }

    logout$(): Observable<void> {
        this.userSource.next( false );
        return of( undefined ).pipe(
            delay( 500 ),
        );
    }

    get isAuthenticated$(): Observable<boolean> {
        return this.userSource.asObservable().pipe(
            map( Boolean )
        );
    }
}
