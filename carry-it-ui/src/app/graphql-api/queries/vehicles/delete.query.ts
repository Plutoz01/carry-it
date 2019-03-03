import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface DeleteVehicleResponse {
    vehicles: {
        deleteVehicle: number;
    };
}

@Injectable()
export class DeleteVehicleQuery extends Mutation<DeleteVehicleResponse> {
    document = gql`
        mutation DeleteVehicle($id: ID!) {
            vehicles {
                deleteVehicle(id: $id)
            }
        }
    `;
}
