import { ChangeDetectionStrategy, Component, Input, TemplateRef, TrackByFunction } from '@angular/core';
import { TemplateListItemContext } from '../template-list-item-context.interface';

@Component( {
    selector: 'ci-template-list',
    templateUrl: './template-list.component.html',
    styleUrls: [ './template-list.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class TemplateListComponent<T> {
    @Input() items: T[] = [];
    @Input() itemTemplate?: TemplateRef<TemplateListItemContext<T>>;
    @Input() trackByFn?: TrackByFunction<T>;
}
