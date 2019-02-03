import { ChangeDetectionStrategy, Component, Inject, Input, TemplateRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { faAngleDoubleLeft } from '@fortawesome/free-solid-svg-icons';
import { BehaviorSubject, from } from 'rxjs';
import { finalize, switchMap } from 'rxjs/operators';
import { ICrudService } from '../../../data-handling/crud-service.interface';
import { CRUD_SERVICE_TOKEN } from '../../../data-handling/provider.tokens';
import { IIdentifiable } from '../../../domain/identifiable.interface';

export interface CreateEntityTemplateContext<ID, T extends IIdentifiable<ID>> {
    onSaveFn: (entity: T) => Promise<any>;
}

@Component( {
    selector: 'ci-create-entity',
    templateUrl: './create-entity.component.html',
    styleUrls: [ './create-entity.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CreateEntityComponent<ID, T extends IIdentifiable<ID>> {

    @Input()
    formTemplate: TemplateRef<CreateEntityTemplateContext<ID, T>>;

    readonly cancelIcon = faAngleDoubleLeft;
    private readonly isLoadingSource = new BehaviorSubject( false );
    readonly isLoading$ = this.isLoadingSource.asObservable();

    constructor(
        private readonly router: Router,
        private readonly route: ActivatedRoute,
        @Inject(CRUD_SERVICE_TOKEN) private readonly crudService: ICrudService<ID, T>
    ) {
    }

    async onSave( entity: T ): Promise<any> {
        this.isLoadingSource.next( true );
        return this.crudService.create$( entity ).pipe(
            switchMap( saveResult => from( this.navigateToAdminPage( saveResult.id ) ) ),
            finalize( () => this.isLoadingSource.next( false ) )
        ).toPromise();
    }

    async onCancel(): Promise<void> {
        await this.navigateToAdminPage( null );
    }

    get context(): CreateEntityTemplateContext<ID, T> {
        return {
            onSaveFn: (entity: T) => this.onSave(entity)
        };
    }

    private async navigateToAdminPage( id: ID ): Promise<boolean> {
        return this.router.navigate( [ '../' ], { queryParams: { id }, relativeTo: this.route } );
    }
}
