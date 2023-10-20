import { Component } from '@angular/core';
import { SearchResponse } from './components/search/search-response';
import { Sort } from './components/sorting-settings/sorting-settings.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'youtube-client-app';

  results!: SearchResponse;

  sort!: Sort;

  filterTerm!: string;

  getSearchTerm(response: SearchResponse) {
    this.results = response;
  }

  getSort(sort: Sort) {
    if (!this.sort) this.sort = sort;
    else Object.assign(this.sort, sort);
  }

  getFilter(filter: string) {
    this.filterTerm = filter;
  }
}
