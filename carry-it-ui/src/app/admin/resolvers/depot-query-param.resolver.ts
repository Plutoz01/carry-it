import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Depot } from '../../domain';
import { DepotService } from '../services/depot.service';

@Injectable()
export class DepotQueryParamResolver implements Resolve<Depot> {

    constructor( private readonly depotService: DepotService ) {
    }

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Depot> {
        const depotId = route.queryParamMap.get( 'depotId' );
        if ( depotId ) {
            return this.depotService.getById$( depotId );
        }
        return of( null );
    }
}
