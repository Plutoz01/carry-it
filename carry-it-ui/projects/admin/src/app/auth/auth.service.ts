import { Injectable } from '@angular/core';
import { AuthClass } from 'aws-amplify';
import { AmplifyService } from 'aws-amplify-angular';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { SignInResult } from './models/sign-in-result.enum';

@Injectable( {
    providedIn: 'root'
} )
export class AuthService {
    private readonly userSource = new BehaviorSubject( null );
    private readonly amplifyAuth: AuthClass;

    constructor( private readonly amplify: AmplifyService ) {
        this.amplifyAuth = amplify.auth();
        amplify.authStateChange$.subscribe( authState => {
            console.log( 'authState changed: ', authState );
        } );
    }

    async signIn( username: string, password: string ): Promise<SignInResult> {
        try {
            // const user = await Auth.signIn( username, password );
            const user = await this.amplifyAuth.signIn( username, password );
            if ( !user.challengeName ) {
                return SignInResult.SUCCESS;
            }

            switch ( user.challengeName ) {
                case 'SMS_MFA':
                case 'SOFTWARE_TOKEN_MFA':
                case  'MFA_SETUP':
                    return SignInResult.UNKNOWN;
                case 'NEW_PASSWORD_REQUIRED':
                    return SignInResult.NEW_PASSWORD_REQUIRED;
                default:
                    return SignInResult.UNKNOWN;
            }

            // if ( user.challengeName === 'SMS_MFA' ||
            //     user.challengeName === 'SOFTWARE_TOKEN_MFA' ) {
            // // You need to get the code from the UI inputs
            // // and then trigger the following function with a button click
            // // TODO:
            // // const code = getCodeFromUserInput();
            // const code = '1234';
            // // If MFA is enabled, sign-in should be confirmed with the confirmation code
            // const loggedUser = await Auth.confirmSignIn(
            //     user,   // Return object from Auth.signIn()
            //     code,   // Confirmation code
            //     user.challengeName // MFA Type e.g. SMS_MFA, SOFTWARE_TOKEN_MFA
            // );
            // return true;
            // } else if ( user.challengeName === 'NEW_PASSWORD_REQUIRED' ) {
            //     const { requiredAttributes } = user.challengeParam; // the array of required attributes, e.g ['email', 'phone_number']
            // You need to get the new password and required attributes from the UI inputs
            // and then trigger the following function with a button click
            // For example, the email and phone_number are required attributes
            //     const loggedUser = await Auth.completeNewPassword(
            //         user,               // the Cognito User Object
            //         'NewPassword123',       // the new password
            //         // OPTIONAL, the required attributes
            //         {
            //             name: 'Customer 1 Name'
            //         }
            //     );
            // } else if ( user.challengeName === 'MFA_SETUP' ) {
            //     // This happens when the MFA method is TOTP
            //     // The user needs to setup the TOTP before using it
            //     // More info please check the Enabling MFA part
            //     // Auth.setupTOTP( user );
            // } else {
            //     // The user directly signs in
            //     console.log( user );
            // }
        } catch ( err ) {
            console.log( err );

            if ( err.code === 'UserNotConfirmedException' ) {
                // The error happens if the user didn't finish the confirmation step when signing up
                // In this case you need to resend the code and confirm the user
                // About how to resend the code and confirm the user, please check the signUp part
            } else if ( err.code === 'PasswordResetRequiredException' ) {
                // The error happens when the password is reset in the Cognito console
                // In this case you need to call forgotPassword to reset the password
                // Please check the Forgot Password part.
            } else if ( err.code === 'NotAuthorizedException' ) {
                // The error happens when the incorrect password is provided
                return SignInResult.INVALID_CREDENTIALS;
            } else if ( err.code === 'UserNotFoundException' ) {
                // The error happens when the supplied username/email does not exist in the Cognito user pool
                return SignInResult.INVALID_CREDENTIALS;
            }
            return SignInResult.UNKNOWN;
        }
    }

    signOut$(): Observable<void> {
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
