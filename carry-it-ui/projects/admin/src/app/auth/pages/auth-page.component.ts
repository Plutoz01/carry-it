import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthClass } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { filter, first, map, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { CompleteNewPassword } from '../components/require-new-password-form/require-new-password-form.component';
import { SignInResult } from '../models/sign-in-result.enum';
import { AuthService } from '../auth.service';
import { SignInCredentials } from '../models/sign-in-credentials.interface';
import { CognitoUser } from '@aws-amplify/auth';

class SignInUser extends CognitoUser {
    challengeName?: string;
}

@Component( {
    templateUrl: './auth-page.component.html',
    styleUrls: [ './auth-page.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class AuthPage implements OnInit, OnDestroy {

    constructor( private readonly amplify: AmplifyService, private readonly router: Router ) {
        this.amplifyAuth = amplify.auth();

        // auto-redirect when already signed in
        amplify.authStateChange$.pipe(
            takeUntil( this.onDestroySource ),
            first(),
            filter( authState => authState.state === 'signedIn' ),
            tap( () => console.log( 'should redirect immediately' ) ),
            switchMap( () => of( this.router.navigate( [ '/admin' ] ) ) )
        ).subscribe();
    }

    private readonly signInResponseSource = new BehaviorSubject<SignInResult>( SignInResult.UNKNOWN );
    private readonly onDestroySource = new Subject<void>();
    private readonly amplifyAuth: AuthClass;
    private user: SignInUser;

    readonly loginFormVisible$ = this.amplify.authStateChange$.pipe(
        takeUntil( this.onDestroySource ),
        map( authState => authState.state === 'signedOut' ),
        startWith( true )
    );

    readonly requireNewPasswordFormVisible$ = this.amplify.authStateChange$.pipe(
        takeUntil( this.onDestroySource ),
        map( authState => authState.state === 'requireNewPassword' ),
        startWith( false )
    );

    readonly isInvalidCredentialsSubmitted$ = this.signInResponseSource.asObservable().pipe(
        map( signInResult => signInResult === SignInResult.INVALID_CREDENTIALS )
    );

    readonly requiredAttributes: { field: string, label: string }[] = [
        { field: 'name', label: 'Full name' }
    ];

    ngOnInit(): void {
    }

    ngOnDestroy(): void {
        this.onDestroySource.next();
        this.onDestroySource.complete();
    }

    async onSignIn( signInCredentials: SignInCredentials ): Promise<void> {
        // TODO: move this to service
        this.user = await this.amplifyAuth.signIn( signInCredentials.username, signInCredentials.password );

        if ( !this.user.challengeName ) {
            await this.router.navigate( [ '/admin' ] );
        } else {
            console.log( 'challenge: ', this.user.challengeName );
        }
    }

    async onCompleteNewPassword( completeNewPassword: CompleteNewPassword ): Promise<void> {
        // TODO: move this to service
        await this.amplifyAuth.completeNewPassword( this.user, completeNewPassword.password, completeNewPassword.attributes );
        await this.router.navigate( [ '/admin' ] );
    }
}

