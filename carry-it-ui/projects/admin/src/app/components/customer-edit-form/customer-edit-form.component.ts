import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from '../../models/domain';

@Component( {
    selector: 'ci-admin-customer-edit-form',
    templateUrl: './customer-edit-form.component.html',
    styleUrls: [ './customer-edit-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CustomerEditFormComponent implements OnChanges {
    @Input() customer: Customer;
    @Output() save = new EventEmitter<Customer>();
    @Output() delete = new EventEmitter<Customer>();

    readonly customerForm: FormGroup;

    constructor( private readonly formBuilder: FormBuilder ) {
        this.customerForm = formBuilder.group( {
            id: formBuilder.control( '' ),
            name: formBuilder.control( '', Validators.required )
        } );
    }

    get isSavable(): boolean {
        return this.customerForm.valid;
    }

    get isDeletable(): boolean {
        return !!this.customer
            && !isNaN(this.customer.id);
    }

    ngOnChanges( changes: SimpleChanges ): void {
        if ( changes[ 'customer' ] ) {
            const newCustomer = changes[ 'customer' ].currentValue;
            this.customerForm.reset( newCustomer );
        }
    }

    onSave(): void {
        if ( this.customerForm.valid ) {
            this.save.emit( this.customerForm.value );
        }
    }

    onReset(): void {
        this.customerForm.reset( this.customer );
    }
}
