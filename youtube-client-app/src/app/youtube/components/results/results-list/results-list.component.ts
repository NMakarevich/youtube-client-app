import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { YoutubeService } from '../../../services/youtube.service';
import { ResultsItem } from '../results-item/results-item.model';
import { SortParam } from '../../../../core/services/sorting.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  constructor(private readonly youtubeService: YoutubeService) {}

  get results$(): Observable<ResultsItem[]> {
    return this.youtubeService.results$;
  }

  get sort(): SortParam {
    return this.youtubeService.sort;
  }

  get filter(): string {
    return this.youtubeService.filter;
  }
}
