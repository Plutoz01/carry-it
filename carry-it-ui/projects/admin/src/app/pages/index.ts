import { CreateCustomerPage } from './create-customer/create-customer.page';
import { CreateDepotPage } from './create-depot/create-depot.page';
import { CreateVehiclePage } from './create-vehicle/create-vehicle.page';
import { CustomerAdminPage } from './customer-admin/customer-admin.page';
import { DepotAdminPage } from './depot-admin/depot-admin.page';
import { LandingPage } from './landing/landing.page';
import { VehicleAdminPage } from './vehicle-admin/vehicle-admin.page';

export const ADMIN_PAGES = [
    LandingPage,
    CustomerAdminPage,
    DepotAdminPage,
    VehicleAdminPage,
    CreateDepotPage,
    CreateCustomerPage,
    CreateVehiclePage
];
