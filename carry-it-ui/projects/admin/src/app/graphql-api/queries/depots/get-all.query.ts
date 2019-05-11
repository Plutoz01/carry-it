import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Depot } from '../../../models/domain';
import { PagedResponse } from 'data-handling';

export interface GetAllDepotResponse {
    vehicles: {
        getAllDepot: PagedResponse<Depot>;
    };
}

@Injectable()
export class GetAllDepotQuery extends Query<GetAllDepotResponse> {
    document = gql`
        query GetAllDepot($page: Int!, $size: Int!, $queryText: String) {
            vehicles {
                getAllDepot(page: {page: $page, size: $size}, queryText: $queryText) {
                    pageInfo { totalElements, totalPages },
                    items { id, name, vehicleCount }
                }
            }
        }`;
}
