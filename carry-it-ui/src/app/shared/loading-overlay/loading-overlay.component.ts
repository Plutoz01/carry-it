import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component( {
    selector: 'ci-loading-overlay',
    templateUrl: './loading-overlay.component.html',
    styleUrls: [ './loading-overlay.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class LoadingOverlayComponent {

    readonly spinnerIcon = faSync;
}
