import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

export interface DeleteVehicleResponse {
    deleteVehicle: number;
}

@Injectable()
export class DeleteVehicleQuery extends Mutation<DeleteVehicleResponse> {
    document = gql`
        mutation DeleteVehicle($id: ID!) {
            deleteVehicle(id: $id)
        }
    `;
}
