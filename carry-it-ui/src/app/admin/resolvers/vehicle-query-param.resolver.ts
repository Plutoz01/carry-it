import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Vehicle } from '../../domain';
import { VehicleService } from '../services/vehicle.service';

@Injectable()
export class VehicleQueryParamResolver implements Resolve<Vehicle> {

    constructor( private readonly vehicleService: VehicleService ) {
    }

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Vehicle> {
        const vehicleId = parseInt( route.queryParamMap.get( 'id' ), 10 );
        if ( !isNaN( vehicleId ) ) {
            return this.vehicleService.getById$( vehicleId );
        }
        return of( null );
    }


}
