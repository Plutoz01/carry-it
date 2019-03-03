import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Customer } from '../../../domain';

export interface GetCustomerByIdResponse {
    orders: {
        getCustomerById: Customer | null;
    };
}

@Injectable()
export class GetCustomerByIdQuery extends Query<GetCustomerByIdResponse> {
    document = gql`
        query GetCustomerById($id: ID!) {
            orders {
                getCustomerById(id: $id) {
                    id
                    name
                }
            }
        }
    `;
}
