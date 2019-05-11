import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Depot } from '../../../models/domain';

export interface UpdateDepotResponse {
    vehicles: {
        updateDepot: Depot;
    };
}

@Injectable()
export class UpdateDepotQuery extends Mutation<UpdateDepotResponse> {
    document = gql`
        mutation UpdateDepot($input: Vehicles_UpdateDepotInput!) {
            vehicles {
                updateDepot(input: $input) { id, name }
            }
        }
    `;
}
