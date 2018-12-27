import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Depot } from '../../../domain';

@Component( {
    selector: 'ci-depot-edit-form',
    templateUrl: './depot-edit-form.component.html',
    styleUrls: [ './depot-edit-form.component.scss' ]
} )
export class DepotEditFormComponent implements OnChanges {
    @Input() depot: Depot;

    @Output() save = new EventEmitter<Depot>();

    readonly depotForm: FormGroup;

    constructor( private readonly formBuilder: FormBuilder ) {
        this.depotForm = formBuilder.group( {
            id: formBuilder.control( '' ),
            name: formBuilder.control( '', Validators.required )
        } );
    }

    ngOnChanges( changes: SimpleChanges ): void {
        if ( changes[ 'depot' ] ) {
            const newDepot = changes[ 'depot' ].currentValue;
            this.depotForm.reset( newDepot );
        }
    }

    onSave(): void {
        if ( this.depotForm.valid ) {
            this.save.emit( this.depotForm.value );
        }
    }

    onReset(): void {
        this.depotForm.reset(this.depot);
    }
}
