import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: '/depots', pathMatch: 'full' },
    { path: 'depots', loadChildren: './depots/depots.module#DepotsModule' },
    { path: 'vehicles', loadChildren: './vehicles/vehicles.module#VehiclesModule' }
];

@NgModule( {
    imports: [ RouterModule.forRoot( routes ) ],
    exports: [ RouterModule ]
} )
export class AppRoutingModule {
}
