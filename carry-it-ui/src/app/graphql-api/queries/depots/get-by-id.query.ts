import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Depot } from '../../../domain';

export interface GetDepotByIdResponse {
    getDepotById: Depot|null;
}

@Injectable()
export class GetDepotByIdQuery extends Query<GetDepotByIdResponse> {
    document = gql`
        query GetDepotById($id: ID!) {
            getDepotById(id: $id) {
                id
                name
                vehicles { id, licencePlate }
            }
        }
    `;
}