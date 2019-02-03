import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../domain';

export interface GetVehicleByIdResponse {
    getVehicleById: Vehicle | null;
}

@Injectable()
export class GetVehicleByIdQuery extends Query<GetVehicleByIdResponse> {
    document = gql`
        query GetVehicleById($id: ID!) {
            getVehicleById(id: $id) {
                id
                licencePlate
                depot { id, name }
            }
        }
    `;
}
