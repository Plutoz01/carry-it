import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Customer } from '../models/domain';
import { CustomerService } from '../services/customer.service';

@Injectable( {
    providedIn: 'root'
} )
export class CustomerQueryParamResolver implements Resolve<Customer> {

    constructor( private readonly customerService: CustomerService ) {
    }

    resolve( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Customer> {
        const CustomerId = parseInt( route.queryParamMap.get( 'id' ), 10 );
        if ( !isNaN( CustomerId ) ) {
            return this.customerService.getById$( CustomerId );
        }
        return of( null );
    }
}
