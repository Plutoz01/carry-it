import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../domain';

export interface UpdateVehicleResponse {
    vehicles: {
        updateVehicle: Vehicle;
    };
}

@Injectable()
export class UpdateVehicleQuery extends Mutation<UpdateVehicleResponse> {
    document = gql`
        mutation updateVehicle($input: Vehicles_UpdateVehicleInput!) {
            vehicles {
                updateVehicle(input: $input) { id, licencePlate, depot { id, name } }
            }
        }
    `;
}
