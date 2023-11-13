import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SortingService, SortParam } from '../../core/services/sorting.service';
import { SearchService } from '../../core/services/search.service';
import { ResultsItem } from '../components/results/results-item/results-item.model';
import { CustomCard } from '../pages/admin/custom-card.model';

@Injectable()
export class YoutubeService {
  constructor(
    private readonly searchService: SearchService,
    private readonly sortingService: SortingService
  ) {}

  get results$(): Observable<(ResultsItem | CustomCard)[]> {
    return this.searchService.results$;
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
