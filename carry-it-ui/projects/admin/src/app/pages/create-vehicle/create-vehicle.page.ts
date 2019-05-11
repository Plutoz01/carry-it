import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CRUD_SERVICE_TOKEN } from 'data-handling';
import { Vehicle } from '../../models/domain';
import { emptyVehicle } from '../../models/domain/vehicle.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component( {
    templateUrl: './create-vehicle.page.html',
    styleUrls: [ './create-vehicle.page.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: CRUD_SERVICE_TOKEN, useExisting: VehicleService }
    ]
} )
export class CreateVehiclePage {
    readonly initial: Vehicle = emptyVehicle();
}
