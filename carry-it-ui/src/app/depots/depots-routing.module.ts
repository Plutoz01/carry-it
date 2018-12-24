import { RouterModule, Routes } from '@angular/router';
import { DepotListComponent } from './pages/depot-list/depot-list.component';

const routes: Routes = [
    { path: '', component: DepotListComponent }
];

export const DepotsRoutingModule = RouterModule.forChild( routes );
