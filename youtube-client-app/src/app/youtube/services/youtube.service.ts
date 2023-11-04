import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SortingService, SortParam } from '../../core/services/sorting.service';
import { SearchService } from '../../core/services/search.service';
import { ResultsItem } from '../components/results/results-item/results-item.model';

@Injectable()
export class YoutubeService {
  constructor(
    private readonly searchService: SearchService,
    private readonly sortingService: SortingService
  ) {}

  get results$(): Observable<ResultsItem[]> {
    return this.searchService.response$;
  }

  get sort(): SortParam {
    return this.sortingService.sortParams;
  }

  get filter(): string {
    return this.sortingService.filterTerm;
  }

  prevPage(): void {
    this.searchService.prevPage();
  }

  nextPage(): void {
    this.searchService.nextPage();
  }
}
