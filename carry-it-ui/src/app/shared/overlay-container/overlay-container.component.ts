import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component( {
    selector: 'ci-overlay-container',
    templateUrl: './overlay-container.component.html',
    styleUrls: [ './overlay-container.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class OverlayContainerComponent {
}
