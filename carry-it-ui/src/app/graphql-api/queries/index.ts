import { CreateCustomerQuery } from './customers/create.query';
import { DeleteCustomerQuery } from './customers/delete.query';
import { GetAllCustomerQuery } from './customers/get-all.query';
import { GetCustomerByIdQuery } from './customers/get-by-id.query';
import { UpdateCustomerQuery } from './customers/update.query';
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
    GetAllCustomerQuery,
    GetCustomerByIdQuery,
    CreateCustomerQuery,
    UpdateCustomerQuery,
    DeleteCustomerQuery,

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
