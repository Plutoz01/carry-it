import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../domain';

export interface GetAllVehicleResponse {
    getAllVehicle: Vehicle[];
}

@Injectable()
export class GetAllVehicleQuery extends Query<GetAllVehicleResponse> {
    document = gql`
        query GetAllVehicle {
            getAllVehicle {
                id,
                licencePlate,
                depot {
                    name
                }
            }
        }`;
}
