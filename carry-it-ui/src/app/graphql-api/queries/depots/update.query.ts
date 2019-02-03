import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Depot } from '../../../domain';

export interface UpdateDepotResponse {
    updateDepot: Depot;
}

@Injectable()
export class UpdateDepotQuery extends Mutation<UpdateDepotResponse> {
    document = gql`
        mutation UpdateDepot($input: UpdateDepotInput!) {
            updateDepot(input: $input) { id, name }
        }
    `;
}
