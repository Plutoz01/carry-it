import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../models/domain';

export interface GetVehicleByIdResponse {
    vehicles: {
        getVehicleById: Vehicle | null;
    };
}

@Injectable()
export class GetVehicleByIdQuery extends Query<GetVehicleByIdResponse> {
    document = gql`
        query GetVehicleById($id: ID!) {
            vehicles {
                getVehicleById(id: $id) {
                    id
                    licencePlate
                    depot { id, name }
                }
            }
        }
    `;
}
