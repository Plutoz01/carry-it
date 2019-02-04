import { ChangeDetectionStrategy, Component, OnDestroy, TrackByFunction } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, from, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, finalize, map, pluck, switchMap, tap } from 'rxjs/operators';
import { PAGEABLE_DATA_PROVIDER_TOKEN } from '../../../data-handling/provider.tokens';
import { Vehicle } from '../../../domain';
import { VehicleService } from '../../services/vehicle.service';

@Component( {
    templateUrl: './vehicle-admin.page.html',
    styleUrls: [ './vehicle-admin.page.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PAGEABLE_DATA_PROVIDER_TOKEN,
            useExisting: VehicleService
        }
    ]
} )
export class VehicleAdminPage implements OnDestroy {

    readonly detailsItem$: Observable<Vehicle | null>;
    private readonly isLoadingSource = new BehaviorSubject( false );
    private readonly searchSubscription: Subscription;

    constructor( private readonly vehicleService: VehicleService,
                 private readonly route: ActivatedRoute,
                 private readonly router: Router
    ) {
        this.searchSubscription = this.queryText$.pipe(
            switchMap( ( queryText: string ) => this.vehicleService.setQueryText$( queryText ) )
        ).subscribe();

        this.detailsItem$ = route.data.pipe(
            pluck( 'vehicle' )
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
            this.vehicleService.isLoading$
        ).pipe(
            map( ( [ isComponentLoading, isServiceLoading ] ) => isComponentLoading || isServiceLoading )
        );
    }

    ngOnDestroy(): void {
        this.searchSubscription.unsubscribe();
    }

    public readonly listItemTrackByFn: TrackByFunction<Vehicle> = ( idx, item: Vehicle ) => item ? item.id : null;

    async onSelectionChange( newSelection: Vehicle | null ): Promise<void> {
        const vehicleId = newSelection ? newSelection.id : '';
        await this.updateQueryParams( { id: vehicleId || null } );
    }

    async onSave( vehicle: Vehicle ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.vehicleService.update$( vehicle ).pipe(
            switchMap( () => this.vehicleService.reload$() ),
            finalize( () => this.isLoadingSource.next( false ) )
        ).toPromise();
        await this.updateQueryParams( { depotId: null } );
    }

    async onFilter( queryText: string ): Promise<void> {
        await this.updateQueryParams( { q: queryText || null, id: null } );
    }

    async onNew(): Promise<void> {
        await this.router.navigate( [ './new' ], { relativeTo: this.route } );
    }

    async onDelete( vehicle: Vehicle ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.vehicleService.delete$( vehicle.id ).pipe(
            switchMap( () => this.vehicleService.reload$() ),
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
