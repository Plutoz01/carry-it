import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { of } from 'rxjs';
import { filter, switchMap } from 'rxjs/operators';
import { AuthService } from '../../auth.service';

@Component( {
    templateUrl: './login.page.html',
    styleUrls: [ './login.page.scss' ]
} )
export class LoginPage implements OnInit {
    readonly userIcon = faUserCircle;
    loginForm: FormGroup;

    constructor( private readonly authService: AuthService,
                 private readonly router: Router,
                 private readonly formBuilder: FormBuilder ) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group( {
            username: this.formBuilder.control( '', Validators.required ),
            password: this.formBuilder.control( '', Validators.required )
        } );
    }

    login(): void {
        if ( this.isFormValid ) {
            const username = this.loginForm.value.username;
            const password = this.loginForm.value.password;
            this.authService.login$( username, password ).pipe(
                filter( Boolean ),
                switchMap( () => of( this.router.navigate( [ '/admin' ] ) ) )
            ).subscribe();
        }
    }

    get isFormValid(): boolean {
        return this.loginForm.valid;
    }
}
