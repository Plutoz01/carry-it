import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Depot } from '../../../domain';
import { DepotService } from '../../services/depot.service';

@Component( {
    selector: 'ci-depot-list',
    templateUrl: './depot-list.component.html',
    styleUrls: [ './depot-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DepotListComponent {

    public readonly depots$: Observable<Depot[]>;

    constructor( private readonly depotService: DepotService ) {
        this.depots$ = depotService.getAll$().pipe(
            pluck( 'items' )
        );
    }

    public readonly depotTrackByFn: TrackByFunction<Depot> = ( idx, depot: Depot ) => depot.id;

}
