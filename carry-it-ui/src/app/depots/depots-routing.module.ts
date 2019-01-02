import { RouterModule, Routes } from '@angular/router';
import { CreateDepotComponent } from './pages/create-depot/create-depot.component';
import { DepotAdminComponent } from './pages/depot-admin/depot-admin.component';
import { DepotQueryParamResolver } from './resolvers/depot-query-param-resolver.service';

const routes: Routes = [
    {
        path: '',
        component: DepotAdminComponent,
        resolve: {
            depot: DepotQueryParamResolver
        },
        runGuardsAndResolvers: 'paramsOrQueryParamsChange',
    },
    {
        path: 'new',
        component: CreateDepotComponent
    }
];

export const DepotsRoutingModule = RouterModule.forChild( routes );
