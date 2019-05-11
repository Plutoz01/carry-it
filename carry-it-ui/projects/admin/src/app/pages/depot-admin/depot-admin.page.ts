import { ChangeDetectionStrategy, Component, OnDestroy, TrackByFunction } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, from, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, finalize, map, pluck, switchMap, tap } from 'rxjs/operators';
import { PAGEABLE_DATA_PROVIDER_TOKEN } from 'data-handling';
import { Depot } from '../../models/domain';
import { DepotService } from '../../services/depot.service';

@Component( {
    templateUrl: './depot-admin.page.html',
    styleUrls: [ './depot-admin.page.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PAGEABLE_DATA_PROVIDER_TOKEN,
            useExisting: DepotService
        }
    ]
} )
export class DepotAdminPage implements OnDestroy {

    readonly detailsItem$: Observable<Depot | null>;
    private readonly isLoadingSource = new BehaviorSubject( false );
    private readonly searchSubscription: Subscription;

    constructor( private readonly depotService: DepotService,
                 private readonly route: ActivatedRoute,
                 private readonly router: Router
    ) {
        this.searchSubscription = this.queryText$.pipe(
            switchMap( ( queryText: string ) => this.depotService.setQueryText$( queryText ) )
        ).subscribe();

        this.detailsItem$ = route.data.pipe(
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
        this.searchSubscription.unsubscribe();
    }

    public readonly listItemTrackByFn: TrackByFunction<Depot> = ( idx, item: Depot ) => item ? item.id : null;

    async onSelectionChange( newSelection: Depot | null ): Promise<void> {
        const depotId = newSelection ? newSelection.id : '';
        await this.updateQueryParams( { id: depotId || null } );
    }

    async onSave( depot: Depot ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.depotService.update$( depot ).pipe(
            switchMap( () => this.depotService.reload$() ),
            finalize( () => this.isLoadingSource.next( false ) )
        ).toPromise();
        await this.updateQueryParams( { id: null } );
    }

    async onFilter( queryText: string ): Promise<void> {
        await this.updateQueryParams( { q: queryText || null, id: null } );
    }

    async onNew(): Promise<void> {
        await this.router.navigate( [ './new' ], { relativeTo: this.route } );
    }

    async onDelete( depot: Depot ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.depotService.delete$( depot.id ).pipe(
            switchMap( () => this.depotService.reload$() ),
            tap( () => from( this.onDeleteSuccess() ) ),
            finalize( () => this.isLoadingSource.next( false ) )
        ).toPromise();
    }

    async onDeleteSuccess(): Promise<void> {
        await this.updateQueryParams( { id: null } );
    }

    private async updateQueryParams( paramsObj: Params ): Promise<void> {
        this.isLoadingSource.next( true );
        const navExtras: NavigationExtras = {
            queryParams: paramsObj,
            queryParamsHandling: 'merge'
        };
        await this.router.navigate( [], navExtras ).finally(
            () => this.isLoadingSource.next( false )
        );
    }
}
