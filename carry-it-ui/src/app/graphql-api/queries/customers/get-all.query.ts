import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Customer } from '../../../domain';
import { PagedResponse } from '../../models/pagination.interface';

export interface GetAllCustomerResponse {
    getAllCustomer: PagedResponse<Customer>;
}

@Injectable()
export class GetAllCustomerQuery extends Query<GetAllCustomerResponse> {
    document = gql`
        query GetAllCustomer($page: Int!, $size: Int!, $queryText: String) {
            getAllCustomer(page: {page: $page, size: $size}, queryText: $queryText) {
                pageInfo { totalElements, totalPages },
                items { id, name }
            }
        }`;
}
