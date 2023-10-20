import { Injectable } from '@angular/core';
import { SortingService } from '../../core/services/sorting.service';
import { SearchService } from '../../core/services/search.service';

@Injectable()
export class YoutubeService {
  constructor(
    private readonly searchService: SearchService,
    private readonly sortingService: SortingService
  ) {}

  get response() {
    return this.searchService.response;
  }

  get sort() {
    return this.sortingService.sort;
  }

  get filter() {
    return this.sortingService.filter;
  }
}
