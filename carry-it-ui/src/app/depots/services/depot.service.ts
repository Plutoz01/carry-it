import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractPageableDataProvider } from '../../data-handling/AbstractPageableDataProvider';
import { Depot } from '../../domain';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../../graphql-api/models/pagination.interface';
import { GetAllDepotQuery } from '../../graphql-api/queries/depots/get-all.query';
import { GetDepotByIdQuery } from '../../graphql-api/queries/depots/get-by-id.query';
import { UpdateDepotQuery } from '../../graphql-api/queries/depots/update.query';

@Injectable()
export class DepotService extends AbstractPageableDataProvider<Depot> {

    constructor(
        private readonly getAllDepotQuery: GetAllDepotQuery,
        private readonly getDepotByIdQuery: GetDepotByIdQuery,
        private readonly updateDepotQuery: UpdateDepotQuery
    ) {
        super();
    }

    protected getItems$(page = 0, size = DEFAULT_PAGE_SIZE): Observable<PagedResponse<Depot>> {
        return this.getAllDepotQuery.fetch({page, size}).pipe(
            map( response => response.data.getAllDepot )
        );
    }

    getById$(id: string): Observable<Depot|null> {
        return this.getDepotByIdQuery.fetch({id}).pipe(
            map(response => response.data.getDepotById)
        );
    }

    update$(depot: Depot): Observable<Depot> {
        return this.updateDepotQuery.mutate({input: depot}).pipe(
            map(response => response.data.updateDepot)
        );
    }

}
