import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Depot } from '../../../domain';

export interface CreateDepotResponse {
    createDepot: Depot;
}

@Injectable()
export class CreateDepotQuery extends Mutation<CreateDepotResponse> {
    document = gql`
        mutation CreateDepot($input: CreateDepotInput!) {
            createDepot( input: $input) { id, name }
        }
    `;
}
