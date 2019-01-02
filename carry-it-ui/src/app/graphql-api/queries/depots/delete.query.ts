import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface DeleteDepotResponse {
    deleteDepot: number;
}

@Injectable()
export class DeleteDepotQuery extends Mutation<DeleteDepotResponse> {
    document = gql`
        mutation DeleteDepot($id: ID!) {
            deleteDepot( id: $id)
        }
    `;
}
