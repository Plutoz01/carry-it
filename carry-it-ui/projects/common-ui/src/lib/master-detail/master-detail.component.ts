import {
    ChangeDetectionStrategy,
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnDestroy,
    OnInit,
    Output,
    TemplateRef,
    TrackByFunction,
    ViewChild
} from '@angular/core';
import { faPlus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { TemplateListItemContext } from '../template-list/template-list-item-context.interface';

@Component( {
    selector: 'ci-common-master-detail',
    templateUrl: './master-detail.component.html',
    styleUrls: [ './master-detail.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
} )
export class MasterDetailComponent<LI, D> implements OnInit, OnDestroy {

    @Input() listItemTemplate?: TemplateRef<TemplateListItemContext<LI>>;
    @Input() listTrackByFn?: TrackByFunction<LI>;
    @Input() selected?: LI;
    @Input() detailsItem?: D;
    @Input() detailsTemplate?: TemplateRef<DetailContext<D>>;
    @Input() queryText = '';

    @Output() selectionChange = new EventEmitter<LI | null>();
    @Output() filter = new EventEmitter<string>();
    @Output() new = new EventEmitter();

    readonly searchIcon = faSearch;
    readonly addIcon = faPlus;
    @ViewChild( 'searchInput' ) searchInput: ElementRef;
    private searchInputSubscription: Subscription;
    private readonly searchInputSource = new Subject<string>();

    ngOnInit(): void {
        (this.searchInput.nativeElement as HTMLInputElement).value = this.queryText || '';

        this.searchInputSubscription = this.searchInputSource.pipe(
            debounceTime( 400 ),
            map( text => text.trim() ),
            distinctUntilChanged()
        ).subscribe( this.filter );
    }

    ngOnDestroy(): void {
        if ( this.searchInputSubscription && !this.searchInputSubscription.closed ) {
            this.searchInputSubscription.unsubscribe();
        }
    }

    onSearch( input: string ): void {
        this.searchInputSource.next( input );
    }
}

export interface DetailContext<D> {
    $implicit: D;
}
