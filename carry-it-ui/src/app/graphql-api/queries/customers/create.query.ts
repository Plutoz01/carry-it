import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Customer } from '../../../domain';

export interface CreateCustomerResponse {
    orders: {
        createCustomer: Customer;
    };
}

@Injectable()
export class CreateCustomerQuery extends Mutation<CreateCustomerResponse> {
    document = gql`
        mutation CreateCustomer($input: Orders_CreateCustomerInput!) {
            orders {
                createCustomer( input: $input) { id, name }
            }
        }
    `;
}
