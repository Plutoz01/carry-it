import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../domain';

export interface CreateVehicleResponse {
    createVehicle: Vehicle;
}

@Injectable()
export class CreateVehicleQuery extends Mutation<CreateVehicleResponse> {
    document = gql`
        mutation CreateVehicle($input: CreateVehicleInput!) {
            createVehicle( input: $input) { id, licencePlate, depot { id, name } }
        }
    `;
}
