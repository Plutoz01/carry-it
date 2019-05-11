import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { from, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { AbstractFilterableDataProvider, ICrudService, DEFAULT_PAGE_SIZE, PagedResponse } from 'data-handling';
import { Customer } from '../models/domain';
import { CreateCustomerQuery, CreateCustomerResponse } from '../graphql-api/queries/customers/create.query';
import { DeleteCustomerQuery, DeleteCustomerResponse } from '../graphql-api/queries/customers/delete.query';
import { GetAllCustomerQuery } from '../graphql-api/queries/customers/get-all.query';
import { GetCustomerByIdQuery } from '../graphql-api/queries/customers/get-by-id.query';
import { UpdateCustomerQuery, UpdateCustomerResponse } from '../graphql-api/queries/customers/update.query';

@Injectable( {
    providedIn: 'root'
} )
export class CustomerService extends AbstractFilterableDataProvider<Customer> implements ICrudService<number, Customer> {

    constructor(
        private readonly apollo: Apollo,
        private readonly getAllCustomerQuery: GetAllCustomerQuery,
        private readonly getCustomerByIdQuery: GetCustomerByIdQuery,
        private readonly createCustomerQuery: CreateCustomerQuery,
        private readonly updateCustomerQuery: UpdateCustomerQuery,
        private readonly deleteCustomerQuery: DeleteCustomerQuery
    ) {
        super();
    }

    getById$( id: number ): Observable<Customer | null> {
        return this.getCustomerByIdQuery.fetch( { id } ).pipe(
            map( response => response.data.orders.getCustomerById )
        );
    }

    update$( input: Customer ): Observable<Customer> {
        return this.updateCustomerQuery.mutate( { input } ).pipe(
            map( ( response: { data: UpdateCustomerResponse } ) => response.data.orders.updateCustomer )
        );
    }

    create$( input: Customer ): Observable<Customer> {
        delete input.id;
        return this.createCustomerQuery.mutate( { input } ).pipe(
            map( ( response: { data: CreateCustomerResponse } ) => response.data.orders.createCustomer ),
            switchMap( response => from( this.apollo.getClient().resetStore().then( () => response ) ) ),
        );
    }

    delete$( id: number ): Observable<number> {
        return this.deleteCustomerQuery.mutate( { id } ).pipe(
            map( ( response: { data: DeleteCustomerResponse } ) => response.data.orders.deleteCustomer ),
            switchMap( responseId => from( this.apollo.getClient().resetStore().then( () => responseId ) ) ),
        );
    }

    getFilteredItems$( page = 0, size = DEFAULT_PAGE_SIZE, queryText = '' ): Observable<PagedResponse<Customer>> {
        return this.getAllCustomerQuery.fetch( { page, size, queryText } ).pipe(
            map( response => response.data.orders.getAllCustomer )
        );
    }
}
