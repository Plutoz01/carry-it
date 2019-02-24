import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { OrderRoutingModule } from './order-routing.module';
import { OrderListPage } from './pages/list/order-list.page';

@NgModule( {
    declarations: [
        OrderListPage
    ],
    imports: [
        CommonModule,

        OrderRoutingModule
    ]
} )
export class OrderModule {
}
