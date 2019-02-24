import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Customer } from '../../../domain';

export interface UpdateCustomerResponse {
    updateCustomer: Customer;
}

@Injectable()
export class UpdateCustomerQuery extends Mutation<UpdateCustomerResponse> {
    document = gql`
        mutation UpdateCustomer($input: UpdateCustomerInput!) {
            updateCustomer(input: $input) { id, name }
        }
    `;
}
