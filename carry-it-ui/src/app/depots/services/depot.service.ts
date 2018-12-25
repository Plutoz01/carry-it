import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Depot } from '../../domain';
import { GetAllDepotQuery } from '../../graphql-api/queries/depots/get-all.query';


@Injectable()
export class DepotService {

    constructor( private readonly getAllDepotQuery: GetAllDepotQuery ) {
    }

    getAll$(): Observable<Depot[]> {
        return this.getAllDepotQuery.fetch().pipe(
            map( response => response.data.getAllDepot)
        );
    }
}
