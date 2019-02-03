import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AbstractFilterableDataProvider } from '../../data-handling/abstract-filterable-data-provider.class';
import { Vehicle } from '../../domain';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../../graphql-api/models/pagination.interface';
import { CreateVehicleQuery } from '../../graphql-api/queries/vehicles/create.query';
import { DeleteVehicleQuery } from '../../graphql-api/queries/vehicles/delete.query';
import { GetAllVehicleQuery } from '../../graphql-api/queries/vehicles/get-all.query';
import { GetVehicleByIdQuery } from '../../graphql-api/queries/vehicles/get-by-id.query';
import { UpdateVehicleQuery } from '../../graphql-api/queries/vehicles/update.query';

@Injectable()
export class VehicleService extends AbstractFilterableDataProvider<Vehicle> {

    constructor(
        private readonly apollo: Apollo,
        private readonly getAllVehicleQuery: GetAllVehicleQuery,
        private readonly getVehicleByIdQuery: GetVehicleByIdQuery,
        private readonly createVehicleQuery: CreateVehicleQuery,
        private readonly updateVehicleQuery: UpdateVehicleQuery,
        private readonly deleteVehicleQuery: DeleteVehicleQuery
    ) {
        super();
    }

    getById$( id: string ): Observable<Vehicle | null> {
        return this.getVehicleByIdQuery.fetch( { id } ).pipe(
            map( response => response.data.getVehicleById )
        );
    }

    update$( input: Vehicle ): Observable<Vehicle> {
        return this.updateVehicleQuery.mutate( { input } ).pipe(
            map( response => response.data.updateVehicle )
        );
    }

    create$( input: Vehicle ): Observable<Vehicle> {
        delete input.id;
        return this.createVehicleQuery.mutate( { input } ).pipe(
            map( response => response.data.createVehicle ),
            switchMap( response => from( this.apollo.getClient().resetStore().then( () => response ) ) ),
        );
    }

    delete$( id: number ): Observable<number> {
        return this.deleteVehicleQuery.mutate( { id } ).pipe(
            map( response => response.data.deleteVehicle ),
            switchMap( responseId => from( this.apollo.getClient().resetStore().then( () => responseId ) ) ),
        );
    }

    protected getFilteredItems$( page = 0, size = DEFAULT_PAGE_SIZE, queryText = '' ): Observable<PagedResponse<Vehicle>> {
        return this.getAllVehicleQuery.fetch( { page, size, queryText } ).pipe(
            map( response => response.data.getAllVehicle )
        );
    }
}
