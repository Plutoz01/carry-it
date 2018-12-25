import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Depot } from '../../../domain';

export interface GetAllDepotResponse {
    getAllDepot: Depot[];
}

@Injectable()
export class GetAllDepotQuery extends Query<GetAllDepotResponse> {
    document = gql`
        query GetAllDepot {
            getAllDepot {
                id,
                name,
                vehicleCount
            }
        }`;
}
