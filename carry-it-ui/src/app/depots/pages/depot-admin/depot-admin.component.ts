import { ChangeDetectionStrategy, Component, Inject, TrackByFunction } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { faSync } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { finalize, map, pluck, switchMap } from 'rxjs/operators';
import { IPageableDataProvider } from '../../../data-handling/IPageableDataProvider.interface';
import { PAGEABLE_DATA_PROVIDER } from '../../../data-handling/pageable-data-provider.token';
import { Depot } from '../../../domain';
import { DepotService } from '../../services/depot.service';

@Component( {
    templateUrl: './depot-admin.component.html',
    styleUrls: [ './depot-admin.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PAGEABLE_DATA_PROVIDER,
            useExisting: DepotService
        }
    ]
} )
export class DepotAdminComponent {

    readonly spinnerIcon = faSync;
    readonly depotDetailsItem$: Observable<Depot | null>;
    private readonly isLoadingSource = new BehaviorSubject( false );

    constructor( private readonly depotService: DepotService,
                 private readonly route: ActivatedRoute,
                 private readonly router: Router,
                 @Inject( PAGEABLE_DATA_PROVIDER ) private readonly pageableDataProvider: IPageableDataProvider<Depot> ) {
        this.pageableDataProvider.reload$().subscribe();

        this.depotDetailsItem$ = route.data.pipe(
            pluck( 'depot' )
        );
    }

    get isLoading$(): Observable<boolean> {
        return combineLatest(
            this.isLoadingSource.asObservable(),
            this.pageableDataProvider.isLoading$
        ).pipe(
            map( ( [ isComponentLoading, isServiceLoading ] ) => isComponentLoading || isServiceLoading )
        );
    }

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
        this.isLoadingSource.next( true );
        this.router.navigate( [ `./` ], navExtras ).finally(
            () => this.isLoadingSource.next( false )
        );
    }

    onSave( depot: Depot ) {
        this.isLoadingSource.next( true );
        this.depotService.update$( depot ).pipe(
            switchMap( () => this.pageableDataProvider.reload$() ),
            finalize( () => this.isLoadingSource.next( false ) )
        ).subscribe();
    }
}
