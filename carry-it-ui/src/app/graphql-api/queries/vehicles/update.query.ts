import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../domain';

export interface UpdateVehicleResponse {
    updateVehicle: Vehicle;
}

@Injectable()
export class UpdateVehicleQuery extends Mutation<UpdateVehicleResponse> {
    document = gql`
        mutation UpdateVehicle($input: UpdateVehicleInput!) {
            updateVehicle( input: $input) { id, licencePlate, depot { id, name } }
        }
    `;
}
