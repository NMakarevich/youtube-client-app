import { Component, OnInit } from '@angular/core';
import { debounceTime, filter, Subject } from 'rxjs';
import { Store } from '@ngrx/store';
import { DEBOUNCE_TIME, MIN_SEARCH_LENGTH } from '../../consts';
import { searchYoutubeCards } from '../../../redux/actions/youtube.action';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchSubject = new Subject<string>();

  searchTerm = '';

  constructor(private readonly store: Store) {}

  ngOnInit() {
    this.searchSubject
      .pipe(
        filter((value) => value.length >= MIN_SEARCH_LENGTH),
        debounceTime(DEBOUNCE_TIME)
      )
      .subscribe((searchTerm) =>
        this.store.dispatch(searchYoutubeCards({ searchTerm }))
      );
  }

  search(): void {
    this.searchSubject.next(this.searchTerm);
  }
}
