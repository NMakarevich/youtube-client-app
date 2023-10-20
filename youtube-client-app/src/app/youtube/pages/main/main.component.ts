import { Component } from '@angular/core';
import { YoutubeService } from '../../services/youtube.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private readonly youtubeService: YoutubeService) {}

  get response() {
    return this.youtubeService.response;
  }

  get sort() {
    return this.youtubeService.sort;
  }

  get filter() {
    return this.youtubeService.filter;
  }
}
