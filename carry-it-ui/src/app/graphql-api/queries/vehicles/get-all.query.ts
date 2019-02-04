import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../domain';
import { PagedResponse } from '../../models/pagination.interface';

export interface GetAllVehicleResponse {
    getAllVehicle: PagedResponse<Vehicle>;
}

@Injectable()
export class GetAllVehicleQuery extends Query<GetAllVehicleResponse> {
    document = gql`
        query GetAllVehicle($page: Int!, $size: Int!) {
            getAllVehicle(page: {page: $page, size: $size}) {
                pageInfo { totalElements, totalPages }
                items {
                    id
                    licencePlate
                    depotId
                    depot {
                        id, name
                    }
                }
            }
        }`;
}
