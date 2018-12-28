import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Depot } from '../../../domain';
import { PagedResponse } from '../../models/pagination.interface';

export interface GetAllDepotResponse {
    getAllDepot: PagedResponse<Depot>;
}

@Injectable()
export class GetAllDepotQuery extends Query<GetAllDepotResponse> {
    document = gql`
        query GetAllDepot($page: Int!, $size: Int!, $queryText: String) {
            getAllDepot(page: {page: $page, size: $size}, queryText: $queryText) {
                pageInfo { totalElements, totalPages },
                items { id, name, vehicleCount }
            }
        }`;
}
