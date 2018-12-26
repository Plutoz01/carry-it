import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { Vehicle } from '../../../domain';
import { IPageableItemGeneratorFn } from '../../../graphql-api/models/pagination.interface';
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

    public readonly vehicleGeneratorFn: IPageableItemGeneratorFn<Vehicle> =
        ( page: number, size: number ) => this.vehicleService.getAll$( page, size );

    onVehicleClick( vehicle: Vehicle ): void {
        console.log( 'vehicle clicked: ', vehicle );
    }

    readonly vehicleTrackByFn: TrackByFunction<Vehicle> = ( idx, vehicle: Vehicle ) => vehicle.id;
}
