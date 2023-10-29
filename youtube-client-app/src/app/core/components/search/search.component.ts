import { Component } from '@angular/core';
import { debounceTime, filter, of } from 'rxjs';
import { SearchService } from '../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  searchTerm = '';

  constructor(private readonly searchService: SearchService) {}

  search() {
    of(this.searchTerm)
      .pipe(
        filter((value) => value.length >= 3),
        debounceTime(500)
      )
      .subscribe((value) => this.searchService.search(value));
  }
}
