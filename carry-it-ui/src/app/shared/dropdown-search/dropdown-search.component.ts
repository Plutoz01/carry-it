import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    ElementRef,
    EventEmitter,
    forwardRef,
    Input,
    Output,
    ViewChild
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { faCaretDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { get as getKey } from 'lodash';
import { IIdentifiable } from '../../domain/identifiable.interface';


// TODO: click-outside
@Component( {
    selector: 'ci-dropdown-search',
    templateUrl: './dropdown-search.component.html',
    styleUrls: [ './dropdown-search.component.scss' ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef( () => DropdownSearchComponent ),
            multi: true
        }
    ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class DropdownSearchComponent<T extends IIdentifiable<any>> implements ControlValueAccessor {

    @Input()
    displayKey = 'id';
    @Output()
    search = new EventEmitter<string | undefined>();
    @Input()
    results: T[] = [];
    @Input()
    selectionRemovable = true;

    selected?: T;
    isOpen = false;
    isDisabled = false;
    readonly caretDownIcon = faCaretDown;
    readonly searchIcon = faSearch;

    @ViewChild( 'searchInput' )
    searchInputRef: ElementRef;

    constructor( private readonly changeDetectorRef: ChangeDetectorRef ) {
    }

    get removeButtonVisible(): boolean {
        return this.selectionRemovable && !!this.selected;
    }

    private get searchInputElement(): HTMLInputElement {
        return this.searchInputRef.nativeElement as HTMLInputElement;
    }

    getDisplayValueFrom( item: T ): any {
        return getKey( item, this.displayKey, item );
    }

    onClose() {
        this.isOpen = false;
        this.search.emit( undefined );
    }

    onToggleOpen() {
        if ( !this.isOpen ) {
            this.isOpen = true;
            this.searchInputElement.value = '';
            setTimeout( () => {
                this.searchInputElement.focus();
            }, 1 );
        } else {
            this.onClose();
        }
    }

    onSelect( selected: T ) {
        this.selected = selected;
        this.onClose();
        this._onChange( selected );
    }

    onRemove() {
        this.onSelect( undefined );
    }

    onSearchChange( text: string ) {
        this.search.emit( text );
    }

    registerOnChange( fn: any ): void {
        this._onChange = fn;
    }

    registerOnTouched( fn: any ): void {
    }

    setDisabledState( isDisabled: boolean ): void {
        this.isDisabled = isDisabled;
    }

    writeValue( newValue: T ): void {
        this.selected = newValue;
        this.changeDetectorRef.markForCheck();
    }

    private _onChange = ( _: T ) => undefined;

}
