import { ChangeDetectionStrategy, Component, Inject, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { ICrudService } from 'data-handling';
import { CRUD_SERVICE_TOKEN } from 'data-handling';
import { IIdentifiable } from 'data-handling';

export interface CreateEntityFormTemplateContext<ID, T extends IIdentifiable<ID>> {
    onSaveFn: (entity: T) => Promise<any>;
}

@Component( {
    selector: 'ci-admin-create-entity',
    templateUrl: './create-entity.component.html',
    styleUrls: [ './create-entity.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CreateEntityComponent<ID, T extends IIdentifiable<ID>> {

    @Input()
    formTemplate: TemplateRef<CreateEntityFormTemplateContext<ID, T>>;

    readonly cancelIcon = faAngleDoubleLeft;
    private readonly isLoadingSource = new BehaviorSubject( false );
    readonly isLoading$ = this.isLoadingSource.asObservable();

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        @Inject(CRUD_SERVICE_TOKEN) private readonly crudService: ICrudService<ID, T>
    ) {
    }

    async onSave( entity: T ): Promise<void> {
        this.isLoadingSource.next( true );
        await this.crudService.create$( entity ).pipe(
            switchMap( saveResult => from( this.navigateToAdminPage( saveResult.id ) ) ),
            finalize( () => this.isLoadingSource.next( false ) )
        ).toPromise();
    }

    async onCancel(): Promise<void> {
        await this.navigateToAdminPage( null );
    }

    get context(): CreateEntityFormTemplateContext<ID, T> {
        return {
            onSaveFn: (entity: T) => this.onSave(entity)
        };
    }

    private async navigateToAdminPage( id: ID ): Promise<void> {
        await this.router.navigate( [ '../' ], { queryParams: { id }, relativeTo: this.route } );
    }
}
