import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Depot, Vehicle } from '../../../domain';
import { DepotService } from '../../services/depot.service';

@Component( {
    selector: 'ci-vehicle-edit-form',
    templateUrl: './vehicle-edit-form.component.html',
    styleUrls: [ './vehicle-edit-form.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class VehicleEditFormComponent implements OnChanges {
    @Input() vehicle: Vehicle;
    @Output() save = new EventEmitter<Vehicle>();
    @Output() delete = new EventEmitter<Vehicle>();

    readonly vehicleForm: FormGroup;
    readonly depots$: Observable<Depot[]>;
    readonly depotCompareFn = (depot1: Depot, depot2: Depot) => depot1 && depot2 ? depot1.id === depot2.id : false;

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly depotService: DepotService
    ) {
        this.vehicleForm = formBuilder.group( {
            id: formBuilder.control( '' ),
            depot: formBuilder.control( { id: '', name: '' }, Validators.required ),
            licencePlate: formBuilder.control( '', Validators.required )
        } );

        this.depots$ = this.depotService.getAll$();
    }

    get isSavable(): boolean {
        return this.vehicleForm.valid;
    }

    get isDeletable(): boolean {
        return !!this.vehicle
            && !!this.vehicle.id;
    }

    ngOnChanges( changes: SimpleChanges ): void {
        if ( changes[ 'vehicle' ] ) {
            const newVehicle = changes[ 'vehicle' ].currentValue;
            this.vehicleForm.reset( newVehicle );
        }
    }

    onSave(): void {
        if ( this.vehicleForm.valid ) {
            this.save.emit( this.vehicleForm.value );
        }
    }

    onReset(): void {
        this.vehicleForm.reset( this.vehicle );
    }
}
