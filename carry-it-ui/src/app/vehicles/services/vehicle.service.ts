import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllVehicleQuery } from '../../graphql-api/queries/vehicles/get-all.query';
import { Vehicle } from '../../domain';

@Injectable()
export class VehicleService {

    constructor( private readonly getAllVehicleQuery: GetAllVehicleQuery ) {
    }

    getAll$(): Observable<Vehicle[]> {
        return this.getAllVehicleQuery.fetch().pipe(
            map( response => response.data.getAllVehicle )
        );
    }
}
