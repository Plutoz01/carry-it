import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { Depot } from '../../../domain';
import { IPageableItemGeneratorFn } from '../../../graphql-api/models/pagination.interface';
import { DepotService } from '../../services/depot.service';

@Component( {
    templateUrl: './depot-admin.component.html',
    styleUrls: [ './depot-admin.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DepotAdminComponent {

    readonly depotDetailsItem$: Observable<Depot | null>;

    constructor( private readonly depotService: DepotService,
                 private readonly route: ActivatedRoute,
                 private readonly router: Router ) {

        this.depotDetailsItem$ = route.data.pipe(
            pluck( 'depot' )
        );
    }

    public readonly depotListGeneratorFn: IPageableItemGeneratorFn<Depot> =
        ( page: number, size: number ) => this.depotService.getAll$( page, size );

    public readonly depotTrackByFn: TrackByFunction<Depot> = ( idx, depot: Depot ) => depot ? depot.id : null;

    onSelectionChange( newSelection: Depot | null ): void {
        const depotId = newSelection ? newSelection.id : '';
        let navExtras: NavigationExtras = {
            relativeTo: this.route
        };
        if ( depotId ) {
            navExtras = {
                ...navExtras,
                queryParams: {
                    depotId
                }
            };
        }
        this.router.navigate( [ `./` ], navExtras );
    }

    onSave( depot: Depot ) {
        this.depotService.update$( depot ).subscribe(
            r => {
                // TODO: refresh list content
                console.log( 'depot updated: ', r );
            }
        );
    }
}
