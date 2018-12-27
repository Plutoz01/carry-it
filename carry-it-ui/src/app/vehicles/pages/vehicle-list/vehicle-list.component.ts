import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { Vehicle } from '../../../domain';
import { VehicleService } from '../../services/vehicle.service';

@Component( {
    selector: 'ci-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: [ './vehicle-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class VehicleListComponent {

    constructor( private readonly vehicleService: VehicleService ) {
    }

    onVehicleClick( vehicle: Vehicle ): void {
        console.log( 'vehicle clicked: ', vehicle );
    }

    readonly vehicleTrackByFn: TrackByFunction<Vehicle> = ( idx, vehicle: Vehicle ) => vehicle.id;
}
