import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { GraphqlApiModule } from '../graphql-api/graphql-api.module';
import { CrudFormActionsModule } from '../shared/crud-form-actions/crud-form-actions.module';
import { DropdownSearchModule } from '../shared/dropdown-search/dropdown-search.module';
import { LoadingOverlayModule } from '../shared/loading-overlay/loading-overlay.module';
import { MasterDetailModule } from '../shared/master-detail/master-detail.module';
import { AdminRoutingModule } from './admin-routing.module';
import { DepotEditFormComponent } from './components/depot-edit-form/depot-edit-form.component';
import { VehicleEditFormComponent } from './components/vehicle-edit-form/vehicle-edit-form.component';
import { CreateDepotPage } from './pages/create-depot/create-depot.page';
import { CreateVehiclePage } from './pages/create-vehicle/create-vehicle.page';
import { DepotAdminPage } from './pages/depot-admin/depot-admin.page';
import { VehicleAdminPage } from './pages/vehicle-admin/vehicle-admin.page';
import { DepotQueryParamResolver } from './resolvers/depot-query-param.resolver';
import { VehicleQueryParamResolver } from './resolvers/vehicle-query-param.resolver';
import { DepotService } from './services/depot.service';
import { VehicleService } from './services/vehicle.service';
import { CreateEntityComponent } from './components/create-entity/create-entity.component';

@NgModule({
  declarations: [
      DepotAdminPage,
      VehicleAdminPage,
      CreateDepotPage,
      DepotEditFormComponent,
      VehicleEditFormComponent,
      CreateEntityComponent,
      CreateVehiclePage
  ],
  imports: [
      CommonModule,
      ReactiveFormsModule,
      FontAwesomeModule,

      CrudFormActionsModule,
      DropdownSearchModule,
      GraphqlApiModule,
      AdminRoutingModule,
      LoadingOverlayModule,
      MasterDetailModule
  ],
    providers: [
        DepotService,
        VehicleService,
        DepotQueryParamResolver,
        VehicleQueryParamResolver
    ]
})
export class AdminModule { }
