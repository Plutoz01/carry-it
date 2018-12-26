import { ChangeDetectionStrategy, Component, TrackByFunction } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { debounceTime, map, share, switchMap } from 'rxjs/operators';
import { Vehicle } from '../../../domain';
import { DEFAULT_PAGE_SIZE, PagedResponse } from '../../../graphql-api/models/pagination.interface';
import { VehicleService } from '../../services/vehicle.service';

@Component( {
    selector: 'ci-vehicle-list',
    templateUrl: './vehicle-list.component.html',
    styleUrls: [ './vehicle-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class VehicleListComponent {

    readonly vehicles$: Observable<Vehicle[]>;
    readonly totalItems$: Observable<number>;
    readonly totalPages$: Observable<number>;
    private readonly actualPageSource = new BehaviorSubject( 0 );
    private readonly pageSizeSource = new BehaviorSubject( DEFAULT_PAGE_SIZE );
    private readonly pagedResponse$: Observable<PagedResponse<Vehicle>>;

    constructor( private readonly vehicleService: VehicleService ) {
        this.pagedResponse$ = combineLatest(
            this.actualPage$,
            this.pageSize$
        ).pipe(
            debounceTime( 100 ),
            switchMap( ( [ page, size ]: [ number, number ] ) => {
                return this.vehicleService.getAll$( page, size );
            } ),
            share()
        );

        this.vehicles$ = this.pagedResponse$.pipe(
            map( response => response.items )
        );
        this.totalItems$ = this.pagedResponse$.pipe(
            map( response => response.pageInfo.totalElements )
        );
        this.totalPages$ = this.pagedResponse$.pipe(
            map( response => response.pageInfo.totalPages )
        );
    }

    get actualPage$(): Observable<number> {
        return this.actualPageSource.asObservable();
    }

    get pageSize$(): Observable<number> {
        return this.pageSizeSource.asObservable();
    }

    onPageChange( newPage: number ): void {
        this.actualPageSource.next( newPage );
    }

    onPageSizeChange( newPageSize: number ): void {
        this.pageSizeSource.next( newPageSize );
        this.onPageChange( 0 );
    }

    onVehicleClick( vehicle: Vehicle ): void {
        console.log( 'vehicle clicked: ', vehicle );
    }

    readonly vehicleTrackByFn: TrackByFunction<Vehicle> = ( idx, vehicle: Vehicle ) => vehicle.id;
}
