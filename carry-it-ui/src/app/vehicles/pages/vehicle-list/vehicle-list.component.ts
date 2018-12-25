import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Vehicle } from '../../../domain';
import { VehicleService } from '../../services/vehicle.service';

@Component( {
    selector: 'ci-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: [ './vehicle-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class VehicleListComponent {

    public readonly vehicles$: Observable<Vehicle[]>;

    constructor( private readonly vehicleService: VehicleService ) {
        this.vehicles$ = vehicleService.getAll$().pipe(
            pluck('items')
        );
    }

    public readonly vehicleTrackByFn: TrackByFunction<Vehicle> = ( idx, vehicle: Vehicle ) => vehicle.id;
}
