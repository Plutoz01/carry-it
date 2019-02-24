import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Customer } from '../../../domain';

export interface CreateCustomerResponse {
    createCustomer: Customer;
}

@Injectable()
export class CreateCustomerQuery extends Mutation<CreateCustomerResponse> {
    document = gql`
        mutation CreateCustomer($input: CreateCustomerInput!) {
            createCustomer( input: $input) { id, name }
        }
    `;
}
