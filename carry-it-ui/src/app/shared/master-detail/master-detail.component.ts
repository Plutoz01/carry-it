import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, TemplateRef, TrackByFunction } from '@angular/core';
import { IPageableItemGeneratorFn } from '../../graphql-api/models/pagination.interface';
import { TemplateListItemContext } from '../template-list/template-list-item-context.interface';

@Component( {
    selector: 'ci-master-detail',
    templateUrl: './master-detail.component.html',
    styleUrls: [ './master-detail.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class MasterDetailComponent<LI, D> {

    @Input() listItemTemplate?: TemplateRef<TemplateListItemContext<LI>>;
    @Input() listTrackByFn?: TrackByFunction<LI>;
    @Input() pageableItemGeneratorFn: IPageableItemGeneratorFn<LI>;
    @Input() selected?: LI;
    @Input() detailsItem?: D;
    @Input() detailsTemplate?: TemplateRef<DetailContext<D>>;

    @Output() selectionChange = new EventEmitter<LI | null>();
}

export interface DetailContext<D> {
    $implicit: D;
}
