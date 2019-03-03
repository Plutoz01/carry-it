import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface DeleteCustomerResponse {
    orders: {
        deleteCustomer: number;
    };
}

@Injectable()
export class DeleteCustomerQuery extends Mutation<DeleteCustomerResponse> {
    document = gql`
        mutation DeleteCustomer($id: ID!) {
            orders {
                deleteCustomer( id: $id)
            }
        }
    `;
}
