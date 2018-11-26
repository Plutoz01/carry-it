import { RouterModule, Routes } from '@angular/router';
import { VehicleListComponent } from './pages/vehicle-list/vehicle-list.component';

const routes: Routes = [
    { path: '', component: VehicleListComponent }
];

export const VehiclesRoutingModule = RouterModule.forChild( routes );
