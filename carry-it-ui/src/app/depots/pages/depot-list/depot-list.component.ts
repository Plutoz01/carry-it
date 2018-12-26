import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { Depot } from '../../../domain';
import { IPageableItemGeneratorFn } from '../../../graphql-api/models/pagination.interface';
import { DepotService } from '../../services/depot.service';

@Component( {
    selector: 'ci-depot-list',
    templateUrl: './depot-list.component.html',
    styleUrls: [ './depot-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DepotListComponent {

    constructor( private readonly depotService: DepotService ) {
    }

    public readonly depotGeneratorFn: IPageableItemGeneratorFn<Depot> =
        ( page: number, size: number ) => this.depotService.getAll$( page, size );

    public readonly depotTrackByFn: TrackByFunction<Depot> = ( idx, depot: Depot ) => depot.id;

    onDepotClick( depot: Depot ): void {
        console.log( 'depot clicked: ', depot );
    }
}
