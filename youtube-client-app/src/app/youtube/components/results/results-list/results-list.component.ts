import { Component } from '@angular/core';
import { YoutubeService } from '../../../services/youtube.service';

@Component({
  selector: 'app-results-list',
  templateUrl: './results-list.component.html',
  styleUrls: ['./results-list.component.scss'],
})
export class ResultsListComponent {
  constructor(private readonly youtubeService: YoutubeService) {}

  get results$() {
    return this.youtubeService.results$;
  }

  get sort() {
    return this.youtubeService.sort;
  }

  get filter() {
    return this.youtubeService.filter;
  }
}
