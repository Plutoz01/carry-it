import { RouterModule, Routes } from '@angular/router';
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
    }
];

export const DepotsRoutingModule = RouterModule.forChild( routes );
