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
        const depotId = parseInt( route.queryParamMap.get( 'id' ), 10 );
        if ( !isNaN( depotId ) ) {
            return this.depotService.getById$( depotId );
        }
        return of( null );
    }
}
