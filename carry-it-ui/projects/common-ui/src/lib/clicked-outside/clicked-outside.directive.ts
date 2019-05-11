import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive( {
    selector: '[ciCommonClickedOutside]'
} )
export class ClickedOutsideDirective {

    @Input()
    clickedOutsideActive = true;
    @Input()
    excludeClasses = [];
    @Output()
    public ciClickedOutside = new EventEmitter();

    constructor( private readonly elementRef: ElementRef ) {
    }

    @HostListener( 'document:click', [ '$event.target' ] )
    public onClick( targetElement ) {
        if ( !this.clickedOutsideActive ) {
            return;
        }

        if ( Array.isArray( this.excludeClasses ) ) {
            const hasAnyClass = this.excludeClasses.some( className => targetElement.classList.contains( className ) );
            if ( hasAnyClass ) {
                return;
            }
        }

        const clickedInside = this.elementRef.nativeElement.contains( targetElement );
        if ( !clickedInside ) {
            this.ciClickedOutside.emit();
        }
    }
}
