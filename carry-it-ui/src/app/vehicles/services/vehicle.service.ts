import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from '../../domain';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../../graphql-api/models/pagination.interface';
import { GetAllVehicleQuery } from '../../graphql-api/queries/vehicles/get-all.query';

@Injectable()
export class VehicleService {

    constructor( private readonly getAllVehicleQuery: GetAllVehicleQuery ) {
    }

    getAll$(page = 0, size = DEFAULT_PAGE_SIZE): Observable<PagedResponse<Vehicle>> {
        return this.getAllVehicleQuery.fetch({page, size}).pipe(
            map( response => response.data.getAllVehicle )
        );
    }
}
