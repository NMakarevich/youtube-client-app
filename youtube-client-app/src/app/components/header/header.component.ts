import { Component, EventEmitter, Output } from '@angular/core';
import { SearchResponse } from '../search/search-response';
import { Sort } from '../sorting-settings/sorting-settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  settingsIsOpen = false;

  @Output() setSearchResults: EventEmitter<SearchResponse> =
    new EventEmitter<SearchResponse>();

  @Output() setSort: EventEmitter<Sort> = new EventEmitter<Sort>();

  @Output() setFilter: EventEmitter<string> = new EventEmitter<string>();

  getSearchResults(response: SearchResponse) {
    this.setSearchResults.emit(response);
  }

  getSort(sort: Sort) {
    this.setSort.emit(sort);
  }

  getFilter(filter: string) {
    this.setFilter.emit(filter);
  }

  toggleSettings() {
    this.settingsIsOpen = !this.settingsIsOpen;
  }
}
