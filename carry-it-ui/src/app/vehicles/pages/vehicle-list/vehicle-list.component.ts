import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { VehicleService } from '../../services/vehicle.service';

@Component( {
    selector: 'ci-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: [ './vehicle-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class VehicleListComponent {

    public readonly vehicles$: Observable<string[]>;

    constructor( private readonly vehicleService: VehicleService ) {
        this.vehicles$ = vehicleService.getAll$();
    }

}
