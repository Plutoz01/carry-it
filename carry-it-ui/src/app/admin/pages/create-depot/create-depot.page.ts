import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CRUD_SERVICE_TOKEN } from '../../../data-handling/provider.tokens';
import { Depot } from '../../../domain';
import { emptyDepot } from '../../../domain/depot.interface';
import { DepotService } from '../../services/depot.service';

@Component( {
    templateUrl: './create-depot.page.html',
    styleUrls: [ './create-depot.page.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        { provide: CRUD_SERVICE_TOKEN, useExisting: DepotService }
    ]
} )
export class CreateDepotPage {
    readonly initial: Depot = emptyDepot();
}
