import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, Subject } from 'rxjs';
import { SearchService } from '../../services/search.service';
import { DEBOUNCE_TIME, MIN_SEARCH_LENGTH } from '../../consts';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchSubject = new Subject<string>();

  searchTerm = '';

  constructor(private readonly searchService: SearchService) {}

  ngOnInit() {
    this.searchSubject
      .pipe(
        filter((value) => value.length >= MIN_SEARCH_LENGTH),
        debounceTime(DEBOUNCE_TIME)
      )
      .subscribe((searchTerm) => this.searchService.search(searchTerm));
  }

  search(): void {
    this.searchSubject.next(this.searchTerm);
  }
}
