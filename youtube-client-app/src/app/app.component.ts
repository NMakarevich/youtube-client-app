import { Component } from '@angular/core';
import { SearchResponse } from './components/search/search-response';
import { SortFilter } from './components/sorting-settings/sorting-settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';

  results!: SearchResponse;

  sortFilter!: SortFilter;

  getSearchTerm(response: SearchResponse) {
    this.results = response;
  }

  getSortFilter(sortFilter: SortFilter) {
    if (!this.sortFilter) this.sortFilter = sortFilter;
    else Object.assign(this.sortFilter, sortFilter);
  }
}
