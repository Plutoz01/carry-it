import { RouterModule, Routes } from '@angular/router';
import { OrderListPage } from './pages/list/order-list.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full'
    },
    {
        path: 'list',
        component: OrderListPage
    }
];

export const OrderRoutingModule = RouterModule.forChild( routes );
