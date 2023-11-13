import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { YoutubeService } from '../../../services/youtube.service';
import { SortParam } from '../../../../core/services/sorting.service';
import {
  selectNextPageToken,
  selectPrevPageToken,
} from '../../../../redux/reducers/youtube.reducer';
import { ResultsItem } from '../results-item/results-item.model';
import { CustomCard } from '../../../pages/admin/custom-card.model';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  @Input() results$!: Observable<(ResultsItem | CustomCard)[]>;

  nextPageToken = this.store.select(selectNextPageToken);

  prevPageToken = this.store.select(selectPrevPageToken);

  constructor(
    private readonly youtubeService: YoutubeService,
    private readonly store: Store
  ) {}

  get sort(): SortParam {
    return this.youtubeService.sort;
  }

  get filter(): string {
    return this.youtubeService.filter;
  }

  prevPage(): void {
    this.youtubeService.prevPage();
  }

  nextPage(): void {
    this.youtubeService.nextPage();
  }
}
