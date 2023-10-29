import { Component } from '@angular/core';
import { debounceTime, filter, of } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { DEBOUNCE_TIME, MIN_SEARCH_LENGTH } from '../../consts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm = '';

  constructor(private readonly searchService: SearchService) {}

  search(): void {
    of(this.searchTerm)
      .pipe(
        filter((value) => value.length >= MIN_SEARCH_LENGTH),
        debounceTime(DEBOUNCE_TIME)
      )
      .subscribe((value) => this.searchService.search(value));
  }
}
