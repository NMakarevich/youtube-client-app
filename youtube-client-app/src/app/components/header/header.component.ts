import { Component, EventEmitter, Output } from '@angular/core';
import { SearchResponse } from '../search/search-response';
import { SortFilter } from '../sorting-settings/sorting-settings.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  settingsIsOpen = false;

  @Output() setSearchResults: EventEmitter<SearchResponse> =
    new EventEmitter<SearchResponse>();

  @Output() setSortFilter: EventEmitter<SortFilter> =
    new EventEmitter<SortFilter>();

  getSearchResults(response: SearchResponse) {
    this.setSearchResults.emit(response);
  }

  getSortFilter(sortFilter: SortFilter) {
    this.setSortFilter.emit(sortFilter);
  }

  toggleSettings() {
    this.settingsIsOpen = !this.settingsIsOpen;
  }
}
