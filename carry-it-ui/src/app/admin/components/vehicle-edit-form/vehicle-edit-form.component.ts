import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { trim } from 'lodash';
import { Observable, of, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { Depot, Vehicle } from '../../../domain';
import { DEFAULT_PAGE_SIZE } from '../../../graphql-api/models/pagination.interface';
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
    readonly depotSearchResult$: Observable<Depot[]>;
    private readonly depotSearchTextSource = new Subject<string>();

    constructor(
        private readonly formBuilder: FormBuilder,
        private readonly depotService: DepotService
    ) {
        this.vehicleForm = formBuilder.group( {
            id: formBuilder.control( '' ),
            depot: formBuilder.control( { id: '', name: '' }, Validators.required ),
            licencePlate: formBuilder.control( '', Validators.required )
        } );

        this.depotSearchResult$ = this.depotSearchTextSource.asObservable().pipe(
            debounceTime( 400 ),
            map( searchText => trim( searchText ) ),
            distinctUntilChanged(),
            switchMap( searchText => {
                if ( searchText ) {
                    return this.depotService.getFilteredItems$( 0, DEFAULT_PAGE_SIZE, searchText ).pipe(
                        map( pagedResponse => pagedResponse.items )
                    );
                }
                return of( [] );
            } ),
        );
    }

    get isSavable(): boolean {
        return this.vehicleForm.valid;
    }

    get isDeletable(): boolean {
        return !!this.vehicle
            && !isNaN( this.vehicle.id );
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

    onDepotSearch( text: string | undefined ): void {
        this.depotSearchTextSource.next( text );
    }
}
