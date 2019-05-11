import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Depot } from '../../../models/domain';

export interface CreateDepotResponse {
    vehicles: {
        createDepot: Depot;
    };
}

@Injectable()
export class CreateDepotQuery extends Mutation<CreateDepotResponse> {
    document = gql`
        mutation CreateDepot($input: Vehicles_CreateDepotInput!) {
            vehicles {
                createDepot( input: $input) { id, name }
            }
        }
    `;
}
