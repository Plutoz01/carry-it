import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { SignInCredentials } from '../../models/sign-in-credentials.interface';

@Component( {
    selector: 'ci-admin-sign-in-form',
    templateUrl: './sign-in-form.component.html',
    styleUrls: [ './sign-in-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class SignInFormComponent implements OnInit {
    readonly userIcon = faUserCircle;
    signInForm: FormGroup;
    @Input()
    invalidCredentialsSubmitted = false;
    @Output()
    readonly submitForm = new EventEmitter<SignInCredentials>();

    constructor( private readonly formBuilder: FormBuilder ) {
    }

    ngOnInit(): void {
        this.signInForm = this.formBuilder.group( {
            username: this.formBuilder.control( '', Validators.required ),
            password: this.formBuilder.control( '', Validators.required )
        } );
    }

    onSubmit(): void {
        if ( this.isFormValid ) {
            this.submitForm.emit( this.signInForm.value );
        }
    }

    get isFormValid(): boolean {
        return this.signInForm.valid;
    }
}
