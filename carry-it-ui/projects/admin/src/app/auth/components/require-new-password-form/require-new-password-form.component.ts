import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

@Component( {
    selector: 'ci-admin-require-new-password',
    templateUrl: './require-new-password-form.component.html',
    styleUrls: [ './require-new-password-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class RequireNewPasswordFormComponent implements OnInit {

    form: FormGroup;
    @Input()
    attributes: { field: string, label: string }[] = [];
    @Output()
    submitForm = new EventEmitter<CompleteNewPassword>();

    readonly userEditIcon = faUserEdit;

    constructor( private readonly formBuilder: FormBuilder ) {
    }


    ngOnInit(): void {
        const attributeControls = this.attributes.reduce( ( accumulator, attribute ) => {
            return {
                ...accumulator,
                [ attribute.field ]: this.formBuilder.control( '', Validators.required )
            };
        }, {} );

        this.form = this.formBuilder.group( {
            password: this.formBuilder.control( '', Validators.required ),
            attributes: this.formBuilder.group( attributeControls )
        } );
    }

    onSubmit(): void {
        if ( this.isFormValid ) {
            this.submitForm.emit( this.form.value );
        }
    }

    get isFormValid(): boolean {
        return this.form.valid;
    }
}

export interface CompleteNewPassword {
    password: string;
    attributes: { [ key: string ]: string };
}
