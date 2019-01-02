import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { faSave, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';

@Component( {
    selector: 'ci-crud-form-actions',
    templateUrl: './crud-form-actions.component.html',
    styleUrls: [ './crud-form-actions.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CrudFormActionsComponent {
    @Input() deletable = true;
    @Output() save = new EventEmitter();
    @Output() delete = new EventEmitter();
    @Output() reset = new EventEmitter();

    readonly deleteIcon = faTrash;
    readonly resetIcon = faUndo;
    readonly saveIcon = faSave;
}
