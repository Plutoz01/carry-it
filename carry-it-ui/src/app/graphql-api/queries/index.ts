import { CreateDepotQuery } from './depots/create.query';
import { DeleteDepotQuery } from './depots/delete.query';
import { GetAllDepotQuery } from './depots/get-all.query';
import { GetDepotByIdQuery } from './depots/get-by-id.query';
import { UpdateDepotQuery } from './depots/update.query';
import { CreateVehicleQuery } from './vehicles/create.query';
import { DeleteVehicleQuery } from './vehicles/delete.query';
import { GetAllVehicleQuery } from './vehicles/get-all.query';
import { GetVehicleByIdQuery } from './vehicles/get-by-id.query';
import { UpdateVehicleQuery } from './vehicles/update.query';

export const queries = [
    GetAllDepotQuery,
    GetDepotByIdQuery,
    CreateDepotQuery,
    UpdateDepotQuery,
    DeleteDepotQuery,

    GetAllVehicleQuery,
    GetVehicleByIdQuery,
    CreateVehicleQuery,
    UpdateVehicleQuery,
    DeleteVehicleQuery
];
