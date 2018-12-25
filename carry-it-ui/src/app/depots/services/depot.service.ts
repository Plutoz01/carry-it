import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Depot } from '../../domain';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../../graphql-api/models/pagination.interface';
import { GetAllDepotQuery } from '../../graphql-api/queries/depots/get-all.query';

@Injectable()
export class DepotService {

    constructor( private readonly getAllDepotQuery: GetAllDepotQuery ) {
    }

    getAll$(page = 0, size = DEFAULT_PAGE_SIZE): Observable<PagedResponse<Depot>> {
        return this.getAllDepotQuery.fetch({page, size}).pipe(
            map( response => response.data.getAllDepot )
        );
    }
}
