import { ChangeDetectionStrategy, Component, OnDestroy, TrackByFunction } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Params, Router } from '@angular/router';
import { BehaviorSubject, combineLatest, from, Observable, Subscription } from 'rxjs';
import { distinctUntilChanged, finalize, map, pluck, switchMap, tap } from 'rxjs/operators';
import { PAGEABLE_DATA_PROVIDER_TOKEN } from '../../../data-handling/provider.tokens';
import { Customer } from '../../../domain';
import { CustomerService } from '../../services/customer.service';

@Component( {
    templateUrl: './customer-admin.page.html',
    styleUrls: [ './customer-admin.page.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [
        {
            provide: PAGEABLE_DATA_PROVIDER_TOKEN,
            useExisting: CustomerService
        }
    ]
} )
export class CustomerAdminPage implements OnDestroy {

    readonly detailsItem$: Observable<Customer | null>;
    private readonly isLoadingSource = new BehaviorSubject( false );
    private readonly searchSubscription: Subscription;

    constructor( private readonly customerService: CustomerService,
                 private readonly route: ActivatedRoute,
                 private readonly router: Router
    ) {
        this.searchSubscription = this.queryText$.pipe(
            switchMap( ( queryText: string ) => this.customerService.setQueryText$( queryText ) )
        ).subscribe();

        this.detailsItem$ = route.data.pipe(
            pluck( 'customer' )
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
            this.customerService.isLoading$
        ).pipe(
            map( ( [ isComponentLoading, isServiceLoading ] ) => isComponentLoading || isServiceLoading )
        );
    }

    ngOnDestroy(): void {
        this.searchSubscription.unsubscribe();
    }

    public readonly listItemTrackByFn: TrackByFunction<Customer> = ( idx, item: Customer ) => item ? item.id : null;

    async onSelectionChange( newSelection: Customer | null ): Promise<void> {
        const customerId = newSelection ? newSelection.id : '';
        await this.updateQueryParams( { id: customerId || null } );
    }

    async onSave( customer: Customer ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.customerService.update$( customer ).pipe(
            switchMap( () => this.customerService.reload$() ),
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

    async onDelete( customer: Customer ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.customerService.delete$( customer.id ).pipe(
            switchMap( () => this.customerService.reload$() ),
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
