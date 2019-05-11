import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../models/domain';

export interface CreateVehicleResponse {
    vehicles: {
        createVehicle: Vehicle;
    };
}

@Injectable()
export class CreateVehicleQuery extends Mutation<CreateVehicleResponse> {
    document = gql`
        mutation CreateVehicle($input: Vehicles_CreateVehicleInput!) {
            vehicles {
                createVehicle( input: $input) { id, licencePlate, depot { id, name } }
            }
        }
    `;
}
