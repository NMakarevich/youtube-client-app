import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
import { SearchResponse } from './search-response';
import { results } from '../../mock/mock';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm = '';

  searchResults!: SearchResponse;

  @ViewChild('searchInput') searchInput!: ElementRef;

  @Output() showResults: EventEmitter<SearchResponse> =
    new EventEmitter<SearchResponse>();

  search() {
    this.searchTerm = this.searchInput.nativeElement.value;
    this.searchResults = results;
    if (this.searchTerm.length) this.showResults.emit(this.searchResults);
  }
}
