import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CRUD_SERVICE_TOKEN } from 'data-handling';
import { Customer } from '../../models/domain';
import { emptyCustomer } from '../../models/domain/customer.interface';
import { CustomerService } from '../../services/customer.service';

@Component( {
    templateUrl: './create-customer.page.html',
    styleUrls: [ './create-customer.page.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: CRUD_SERVICE_TOKEN, useExisting: CustomerService }
    ]
} )
export class CreateCustomerPage {
    readonly initial: Customer = emptyCustomer();
}
