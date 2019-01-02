import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { faSave, faTrash, faUndo } from '@fortawesome/free-solid-svg-icons';

@Component( {
    selector: 'ci-crud-form-actions',
    templateUrl: './crud-form-actions.component.html',
    styleUrls: [ './crud-form-actions.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class CrudFormActionsComponent {
    @Input() savable = true;
    @Input() deletable = true;
    @Output() save = new EventEmitter();
    @Output() delete = new EventEmitter();
    @Output() reset = new EventEmitter();

    readonly deleteIcon = faTrash;
    readonly resetIcon = faUndo;
    readonly saveIcon = faSave;

    onSave(): void {
        if ( this.savable ) {
            this.save.emit();
        }
    }

    onDelete(): void {
        if ( this.deletable ) {
            this.delete.emit();
        }
    }
}
