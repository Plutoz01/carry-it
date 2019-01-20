import { ChangeDetectionStrategy, Component, OnDestroy, TrackByFunction } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, finalize, map, pluck, switchMap } from 'rxjs/operators';
import { PAGEABLE_DATA_PROVIDER } from '../../../data-handling/provider.tokens';
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
export class DepotAdminComponent implements OnDestroy {

    readonly depotDetailsItem$: Observable<Depot | null>;
    private readonly isLoadingSource = new BehaviorSubject( false );
    private readonly searchSubscription: Subscription;

    constructor( private readonly depotService: DepotService,
                 private readonly route: ActivatedRoute,
                 private readonly router: Router
    ) {
        this.searchSubscription = this.queryText$.pipe(
            switchMap( ( queryText: string ) => this.depotService.setQueryText$( queryText ) )
        ).subscribe();

        this.depotDetailsItem$ = route.data.pipe(
            pluck( 'depot' )
        );
    }

    get queryText$(): Observable<string> {
        return this.route.queryParams.pipe(
            map( params => params[ 'q' ] || '' ),
            distinctUntilChanged()
        );
    }

    get isLoading$(): Observable<boolean> {
        return combineLatest(
            this.isLoadingSource.asObservable(),
            this.depotService.isLoading$
        ).pipe(
            map( ( [ isComponentLoading, isServiceLoading ] ) => isComponentLoading || isServiceLoading )
        );
    }

    ngOnDestroy(): void {
        if ( this.searchSubscription && !this.searchSubscription.closed ) {
            this.searchSubscription.unsubscribe();
        }
    }

    public readonly depotTrackByFn: TrackByFunction<Depot> = ( idx, depot: Depot ) => depot ? depot.id : null;

    async onSelectionChange( newSelection: Depot | null ): Promise<void> {
        const depotId = newSelection ? newSelection.id : '';
        await this.updateQueryParams( { depotId: depotId || null } );
    }

    async onSave( depot: Depot ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.depotService.update$( depot ).pipe(
            switchMap( () => this.depotService.reload$() ),
            finalize( () => this.isLoadingSource.next( false ) )
        ).toPromise();
        await this.updateQueryParams( { depotId: null } );
    }

    async onFilter( queryText: string ): Promise<void> {
        await this.updateQueryParams( { q: queryText || null, depotId: null } );
    }

    async onNew(): Promise<void> {
        await this.router.navigate( [ './new' ], { relativeTo: this.route } );
    }

    async onDelete( depot: Depot ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.depotService.delete$( depot.id ).pipe(
            switchMap( () => this.depotService.reload$() ),
            finalize( () => this.isLoadingSource.next( false ) )
        ).toPromise();
    }

    private async updateQueryParams( paramsObj: Params ): Promise<boolean> {
        this.isLoadingSource.next( true );
        const navExtras: NavigationExtras = {
            queryParams: paramsObj,
            queryParamsHandling: 'merge'
        };
        return this.router.navigate( [], navExtras ).finally(
            () => this.isLoadingSource.next( false )
        );
    }
}
