import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { Depot } from '../../../domain';
import { emptyDepot } from '../../../domain/depot.interface';
import { DepotService } from '../../services/depot.service';

@Component( {
    selector: 'ci-create-depot',
    templateUrl: './create-depot.component.html',
    styleUrls: [ './create-depot.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CreateDepotComponent {
    readonly depot: Depot = emptyDepot();
    readonly cancelIcon = faAngleDoubleLeft;
    private readonly isLoadingSource = new BehaviorSubject(false);
    readonly isLoading$ = this.isLoadingSource.asObservable();

    constructor( private readonly depotService: DepotService,
                 private readonly router: Router,
                 private readonly route: ActivatedRoute ) {
    }

    onSave( depot: Depot ): void {
        this.isLoadingSource.next( true );
        this.depotService.create$( depot ).pipe(
            switchMap( ( newDepot: Depot ) => from( this.navigateToAdminPage( newDepot.id ) ) ),
            finalize( () => this.isLoadingSource.next(false) )
        ).subscribe();
    }

    async onCancel(): Promise<void> {
        await this.navigateToAdminPage(null);
    }

    private async navigateToAdminPage( depotId: number ): Promise<boolean> {
        return this.router.navigate( ['../'], { queryParams: { depotId }, relativeTo: this.route } );
    }
}
