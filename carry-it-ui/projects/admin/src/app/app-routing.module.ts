import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IsAuthenticatedGuard } from './auth/is-authenticated.guard';
import { LoginPage } from './auth/pages/login/login.page';
import { CreateCustomerPage } from './pages/create-customer/create-customer.page';
import { CreateDepotPage } from './pages/create-depot/create-depot.page';
import { CreateVehiclePage } from './pages/create-vehicle/create-vehicle.page';
import { CustomerAdminPage } from './pages/customer-admin/customer-admin.page';
import { DepotAdminPage } from './pages/depot-admin/depot-admin.page';
import { LandingPage } from './pages/landing/landing.page';
import { VehicleAdminPage } from './pages/vehicle-admin/vehicle-admin.page';
import { CustomerQueryParamResolver } from './resolvers/customer-query-param.resolver';
import { DepotQueryParamResolver } from './resolvers/depot-query-param.resolver';
import { VehicleQueryParamResolver } from './resolvers/vehicle-query-param.resolver';

const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    {
        path: 'login',
        component: LoginPage
    },
    {
        path: 'admin',
        canActivate: [IsAuthenticatedGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: LandingPage
            },
            {
                path: 'customers',
                component: CustomerAdminPage,
                resolve: {
                    customer: CustomerQueryParamResolver
                },
                runGuardsAndResolvers: 'paramsOrQueryParamsChange'
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
        ]
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
