import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface DeleteDepotResponse {
    vehicles: {
        deleteDepot: number;
    };
}

@Injectable()
export class DeleteDepotQuery extends Mutation<DeleteDepotResponse> {
    document = gql`
        mutation DeleteDepot($id: ID!) {
            vehicles {
                deleteDepot( id: $id)
            }
        }
    `;
}
