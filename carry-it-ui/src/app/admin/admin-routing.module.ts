import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerPage } from './pages/create-customer/create-customer.page';
import { CreateDepotPage } from './pages/create-depot/create-depot.page';
import { CreateVehiclePage } from './pages/create-vehicle/create-vehicle.page';
import { CustomerAdminPage } from './pages/customer-admin/customer-admin.page';
import { DepotAdminPage } from './pages/depot-admin/depot-admin.page';
import { VehicleAdminPage } from './pages/vehicle-admin/vehicle-admin.page';
import { CustomerQueryParamResolver } from './resolvers/customer-query-param.resolver';
import { DepotQueryParamResolver } from './resolvers/depot-query-param.resolver';
import { VehicleQueryParamResolver } from './resolvers/vehicle-query-param.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'depots', pathMatch: 'full' },
    {
        path: 'customers',
        component: CustomerAdminPage,
        resolve: {
            customer: CustomerQueryParamResolver
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    },
    {
        path: 'customers/new',
        component: CreateCustomerPage
    },

    {
        path: 'depots',
        component: DepotAdminPage,
        resolve: {
            depot: DepotQueryParamResolver
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    },
    {
        path: 'depots/new',
        component: CreateDepotPage
    },

    {
        path: 'vehicles',
        component: VehicleAdminPage,
        resolve: {
            vehicle: VehicleQueryParamResolver
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    },
    {
        path: 'vehicles/new',
        component: CreateVehiclePage
    }
];

export const AdminRoutingModule = RouterModule.forChild( routes );
