import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AbstractFilterableDataProvider } from '../../data-handling/abstract-filterable-data-provider.class';
import { Depot } from '../../domain';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../../graphql-api/models/pagination.interface';
import { CreateDepotQuery } from '../../graphql-api/queries/depots/create.query';
import { DeleteDepotQuery } from '../../graphql-api/queries/depots/delete.query';
import { GetAllDepotQuery } from '../../graphql-api/queries/depots/get-all.query';
import { GetDepotByIdQuery } from '../../graphql-api/queries/depots/get-by-id.query';
import { UpdateDepotQuery } from '../../graphql-api/queries/depots/update.query';

@Injectable()
export class DepotService extends AbstractFilterableDataProvider<Depot> {

    constructor(
        private readonly apollo: Apollo,
        private readonly getAllDepotQuery: GetAllDepotQuery,
        private readonly getDepotByIdQuery: GetDepotByIdQuery,
        private readonly createDepotQuery: CreateDepotQuery,
        private readonly updateDepotQuery: UpdateDepotQuery,
        private readonly deleteDepotQuery: DeleteDepotQuery
    ) {
        super();
    }

    getById$( id: string ): Observable<Depot | null> {
        return this.getDepotByIdQuery.fetch( { id } ).pipe(
            map( response => response.data.getDepotById )
        );
    }

    update$( input: Depot ): Observable<Depot> {
        return this.updateDepotQuery.mutate( { input } ).pipe(
            map( response => response.data.updateDepot )
        );
    }

    create$( input: Depot ): Observable<Depot> {
        delete input.id;
        return this.createDepotQuery.mutate( { input } ).pipe(
            map( response => response.data.createDepot ),
            switchMap( response => from( this.apollo.getClient().resetStore().then( () => response ) ) ),
        );
    }

    delete$( id: number ): Observable<number> {
        return this.deleteDepotQuery.mutate( { id } ).pipe(
            map( response => response.data.deleteDepot ),
            switchMap( responseId => from( this.apollo.getClient().resetStore().then( () => responseId ) ) ),
        );
    }

    protected getFilteredItems$( page = 0, size = DEFAULT_PAGE_SIZE, queryText: string = '' ): Observable<PagedResponse<Depot>> {
        return this.getAllDepotQuery.fetch( { page, size, queryText } ).pipe(
            map( response => response.data.getAllDepot )
        );
    }
}
