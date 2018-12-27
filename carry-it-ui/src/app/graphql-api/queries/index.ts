import { GetAllDepotQuery } from './depots/get-all.query';
import { GetDepotByIdQuery } from './depots/get-by-id.query';
import { GetAllVehicleQuery } from './vehicles/get-all.query';

export const queries = [
    GetAllDepotQuery,
    GetDepotByIdQuery,

    GetAllVehicleQuery
];
