import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AbstractFilterableDataProvider } from '../../data-handling/abstract-filterable-data-provider.class';
import { ICrudService } from '../../data-handling/crud-service.interface';
import { Vehicle } from '../../domain';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../../graphql-api/models/pagination.interface';
import { CreateVehicleQuery, CreateVehicleResponse } from '../../graphql-api/queries/vehicles/create.query';
import { DeleteVehicleQuery, DeleteVehicleResponse } from '../../graphql-api/queries/vehicles/delete.query';
import { GetAllVehicleQuery } from '../../graphql-api/queries/vehicles/get-all.query';
import { GetVehicleByIdQuery } from '../../graphql-api/queries/vehicles/get-by-id.query';
import { UpdateVehicleQuery, UpdateVehicleResponse } from '../../graphql-api/queries/vehicles/update.query';

@Injectable()
export class VehicleService extends AbstractFilterableDataProvider<Vehicle> implements ICrudService<number, Vehicle> {

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

    getById$( id: number ): Observable<Vehicle | null> {
        return this.getVehicleByIdQuery.fetch( { id } ).pipe(
            map( response => response.data.vehicles.getVehicleById )
        );
    }

    update$( input: Vehicle ): Observable<Vehicle> {
        const vehicleInput: Vehicle = {
            id: input.id,
            depotId: this.fetchDepotId( input ),
            licencePlate: input.licencePlate
        };

        return this.updateVehicleQuery.mutate( { input: vehicleInput } ).pipe(
            map( ( response: { data: UpdateVehicleResponse } ) => response.data.vehicles.updateVehicle )
        );
    }

    create$( input: Vehicle ): Observable<Vehicle> {
        const vehicleInput: Partial<Vehicle> = {
            licencePlate: input.licencePlate,
            depotId: this.fetchDepotId( input )
        };
        return this.createVehicleQuery.mutate( { input: vehicleInput } ).pipe(
            map( ( response: { data: CreateVehicleResponse } ) => response.data.vehicles.createVehicle ),
            switchMap( response => from( this.apollo.getClient().resetStore().then( () => response ) ) ),
        );
    }

    delete$( id: number ): Observable<number> {
        return this.deleteVehicleQuery.mutate( { id } ).pipe(
            map( ( response: { data: DeleteVehicleResponse } ) => response.data.vehicles.deleteVehicle ),
            switchMap( responseId => from( this.apollo.getClient().resetStore().then( () => responseId ) ) ),
        );
    }

    protected fetchDepotId( vehicle: Vehicle ): number | undefined {
        if ( !vehicle ) {
            return undefined;
        }
        if ( !isNaN( vehicle.depotId ) ) {
            return vehicle.depotId;
        }
        if ( vehicle.depot && !isNaN( vehicle.depot.id ) ) {
            return vehicle.depot.id;
        }
        return undefined;
    }

    protected getFilteredItems$( page = 0, size = DEFAULT_PAGE_SIZE, queryText = '' ): Observable<PagedResponse<Vehicle>> {
        return this.getAllVehicleQuery.fetch( { page, size, queryText } ).pipe(
            map( response => response.data.vehicles.getAllVehicle )
        );
    }
}
