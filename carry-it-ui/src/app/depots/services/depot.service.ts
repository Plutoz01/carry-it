import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AbstractFilterableDataProvider } from '../../data-handling/abstract-filterable-data-provider.class';
import { Depot } from '../../domain';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../../graphql-api/models/pagination.interface';
import { CreateDepotQuery } from '../../graphql-api/queries/depots/create.query';
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
        private readonly updateDepotQuery: UpdateDepotQuery
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
            tap( () => this.apollo.getClient().resetStore() )
        );
    }

    protected getFilteredItems$( page = 0, size = DEFAULT_PAGE_SIZE, queryText: string = '' ): Observable<PagedResponse<Depot>> {
        return this.getAllDepotQuery.fetch( { page, size, queryText } ).pipe(
            map( response => response.data.getAllDepot )
        );
    }
}
