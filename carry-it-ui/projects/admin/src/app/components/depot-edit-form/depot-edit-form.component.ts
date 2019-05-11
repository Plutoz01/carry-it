import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Depot } from '../../models/domain';

@Component( {
    selector: 'ci-admin-depot-edit-form',
    templateUrl: './depot-edit-form.component.html',
    styleUrls: [ './depot-edit-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DepotEditFormComponent implements OnChanges {
    @Input() depot: Depot;
    @Output() save = new EventEmitter<Depot>();
    @Output() delete = new EventEmitter<Depot>();

    readonly depotForm: FormGroup;

    constructor( private readonly formBuilder: FormBuilder ) {
        this.depotForm = formBuilder.group( {
            id: formBuilder.control( '' ),
            name: formBuilder.control( '', Validators.required )
        } );
    }

    get isSavable(): boolean {
        return this.depotForm.valid;
    }

    get isDeletable(): boolean {
        return !!this.depot
            && !isNaN(this.depot.id)
            && !this.hasVehicles;
    }

    get hasVehicles(): boolean {
        return Array.isArray( this.depot.vehicles )
            && this.depot.vehicles.length > 0;
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
        this.depotForm.reset( this.depot );
    }
}
