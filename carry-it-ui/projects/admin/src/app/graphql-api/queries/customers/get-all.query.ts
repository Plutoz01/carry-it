import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Customer } from '../../../models/domain';
import { PagedResponse } from 'data-handling';

export interface GetAllCustomerResponse {
    orders: {
        getAllCustomer: PagedResponse<Customer>;
    };
}

@Injectable()
export class GetAllCustomerQuery extends Query<GetAllCustomerResponse> {
    document = gql`
        query GetAllCustomer($page: Int!, $size: Int!, $queryText: String) {
            orders {
                getAllCustomer(page: {page: $page, size: $size}, queryText: $queryText) {
                    pageInfo { totalElements, totalPages },
                    items { id, name }
                }
            }
        }`;
}
