import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { Vehicle } from '../../../models/domain';
import { PagedResponse } from 'data-handling';

export interface GetAllVehicleResponse {
    vehicles: {
        getAllVehicle: PagedResponse<Vehicle>;
    };
}

@Injectable()
export class GetAllVehicleQuery extends Query<GetAllVehicleResponse> {
    document = gql`
        query GetAllVehicle($page: Int!, $size: Int!) {
            vehicles {
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
            }
        }`;
}
